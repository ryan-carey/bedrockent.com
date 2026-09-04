#!/usr/bin/env bash
# Publish bedrockent.com. Usage: ./deploy.sh
# Reads a Netlify personal access token from ../netlify-token.txt (never committed).
set -euo pipefail
SITE_ID="973da8c2-30b5-4bd8-b0bd-fe7f66e151d5"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOKEN_FILE="${NETLIFY_TOKEN_FILE:-$HERE/../netlify-token.txt}"

[ -f "$TOKEN_FILE" ] || { echo "No token at $TOKEN_FILE"; exit 1; }
TOKEN="$(tr -d ' \t\r\n' < "$TOKEN_FILE")"

ZIP="$(mktemp -d)/site.zip"
( cd "$HERE" && zip -q "$ZIP" index.html artist.html data.js _redirects )

echo "Deploying $(unzip -l "$ZIP" | tail -1 | awk "{print \$2}") files..."
RESP="$(curl -sf --max-time 300 \
  -X POST "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys" \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/zip" \
  --data-binary @"$ZIP")"
DEPLOY_ID="$(printf '%s' "$RESP" | python3 -c 'import sys,json;print(json.load(sys.stdin)["id"])')"

for _ in $(seq 1 30); do
  STATE="$(curl -sf --max-time 30 -H "Authorization: Bearer $TOKEN" \
    "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys/$DEPLOY_ID" \
    | python3 -c 'import sys,json;print(json.load(sys.stdin)["state"])')"
  [ "$STATE" = "ready" ] && break
  [ "$STATE" = "error" ] && { echo "Deploy failed: $DEPLOY_ID"; exit 1; }
  sleep 3
done
echo "Deploy $DEPLOY_ID: $STATE"

# Verify what is actually being served
for f in index.html artist.html data.js; do
  live="$(curl -sf "https://bedrockent.com/$f" | sha256sum | cut -d' ' -f1)"
  mine="$(sha256sum "$HERE/$f" | cut -d' ' -f1)"
  [ "$live" = "$mine" ] && echo "  $f ok" || echo "  $f MISMATCH"
done
grep -oE '^/[a-z-]+' "$HERE/_redirects" | while read -r slug; do
  printf '  %-20s %s\n' "$slug" "$(curl -s -o /dev/null -w '%{http_code}' "https://bedrockent.com$slug")"
done

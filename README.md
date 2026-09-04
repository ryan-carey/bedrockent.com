# bedrockent.com

Static link-hub for Bedrock Music. Four files, no build step, no framework.

    index.html    home hub — renders roster + ventures from data.js
    artist.html   one template for every artist page
    data.js       SINGLE SOURCE OF TRUTH — roster, ventures, links, bios, icons
    _redirects    Netlify rules mapping /<slug> to artist.html

## Making a change

Almost everything lives in `data.js`. To add or remove an artist, edit
`BEDROCK.roster` there — and keep `_redirects` in sync, one rewrite line per
slug, or the clean URL will 404.

Check it before publishing:

    python3 -m http.server 8000
    # then open localhost:8000 and localhost:8000/artist.html?a=<slug>

## Publishing

    ./deploy.sh

Zips the four site files, posts them to the Netlify site via the API, waits
for the deploy to go ready, then verifies the live hashes and every slug.

It reads a Netlify personal access token from `../netlify-token.txt` (one
line, plain text, gitignored, never in this repo). Override the location with
`NETLIFY_TOKEN_FILE=/path/to/token`. Revoke the token any time at
app.netlify.com -> User settings -> Applications.

Netlify project: bedrock-music-links (bedrockent.com). Deploys are direct
zip uploads -- no build step, no linked repo. A deploy replaces every file
on the site, so always ship the whole set, never one file.

Note: the Netlify MCP connector's `deploy-site` operation does NOT work from
a Cowork cloud session -- it has to read the stored OAuth token out to mint a
proxy URL, which those sessions can't do (`mcp_oauth_token_read_unsupported`),
and the result is an opaque 403. Use `deploy.sh`.

## Gotchas

- `_redirects` was reconstructed from how the live URLs behaved, not read from
  the original. Six slug rewrites returning 200. Worth a second look.
- No favicon, no netlify.toml, no images. Production is these four files only.
- Netlify's publish directory must be the repo root with an empty build command.

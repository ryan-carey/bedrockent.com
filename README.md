# bedrockent.com

Static link-hub for Bedrock Music. Four files, no build step, no framework.

    index.html    home hub — renders roster + ventures from data.js
    artist.html   one template for every artist page
    data.js       SINGLE SOURCE OF TRUTH — roster, ventures, links, bios, icons
    _redirects    Netlify rules mapping /<slug> to artist.html

Live at https://bedrockent.com · Netlify project `bedrock-music-links`
(site id `973da8c2-30b5-4bd8-b0bd-fe7f66e151d5`).

## Making a change

Almost everything lives in `data.js`. To add or remove an artist, edit
`BEDROCK.roster` there — and keep `_redirects` in sync, one rewrite line per
slug, or the clean URL will 404.

Check it before publishing:

    python3 -m http.server 8000
    # open localhost:8000 and localhost:8000/artist.html?a=<slug>

## Publishing

**Push to `main`. That is the deploy.**

    git add -A && git commit -m "..." && git push

Netlify watches this repo and republishes on every push to `main`: no build
command, publish directory is the repo root. You can also edit `data.js`
directly on github.com and the site will rebuild itself — no tooling, no
tokens, nothing installed.

`./deploy.sh` still works as a manual fallback (direct zip upload to the
Netlify API, using a personal access token read from `../netlify-token.txt`).
Use it only if the git path is broken: on a git-linked site a manual deploy is
superseded by the next push, so the repo must always be the real state.

## If you are picking this up cold

Everything needed to run this site is in this repo plus the owner's own
Netlify and GitHub accounts. Nothing depends on any particular Claude account,
chat history, or machine.

- This repo is PUBLIC, deliberately. It holds only files Netlify already
  serves to the world at bedrockent.com, and on Netlify's free plan a private
  repo blocks builds with "Unrecognized Git contributor" unless the committer
  is a verified team member. Making it private again will break auto-deploy.
  Netlify pulls from it over SSH using a deploy key (Netlify side:
  "deploy key"; GitHub side: repo Settings -> Deploy keys, read-only). A
  GitHub webhook to `https://api.netlify.com/hooks/github` triggers each build.
- To publish from a laptop you need only `git push`. No Netlify credential.
- `netlify-token.txt` is a Netlify personal access token, kept OUTSIDE this
  repo and gitignored. It is only used by `deploy.sh`. Revoke or rotate it at
  app.netlify.com -> User settings -> Applications.

## Gotchas

- `_redirects` was reconstructed by observing how the live URLs behaved, not
  read from an original. Six slug rewrites returning 200, plus a 301 sending
  the removed `/jordan-mccullough` to the homepage. It works, but it has never
  been checked against what was actually intended.
- No favicon, no netlify.toml, no images. The site is these four files only.
- A Netlify zip deploy replaces every file on the site. Always ship the whole
  set, never a single file.
- The Netlify MCP connector's `deploy-site` operation does not work from a
  Cowork cloud session: it has to read the stored OAuth token out to mint a
  proxy URL, which those sessions cannot do (`mcp_oauth_token_read_unsupported`),
  and it surfaces as an opaque 403. Push to git instead.

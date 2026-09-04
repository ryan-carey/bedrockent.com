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

Netlify project: bedrock-music-links (bedrockent.com).

Today this is a MANUAL deploy: app.netlify.com -> bedrock-music-links ->
Deploys -> drag this folder (or a flat zip of it) onto the drop area. A drop
replaces every file on the site, so deploy the whole folder, never one file.

This is the weak point. There is no git remote and no CI, which means the
source of truth has previously lived nowhere durable — the files in this repo
were recovered by scraping production. Connecting this repo to a git remote
and pointing the Netlify project at it would make every future change a
commit, with history and rollback. See the notes in the session that created
this repo.

## Gotchas

- `_redirects` was reconstructed from how the live URLs behaved, not read from
  the original. Six slug rewrites returning 200. Worth a second look.
- No favicon, no netlify.toml, no images. Production is these four files only.
- Netlify's publish directory must be the repo root with an empty build command.

/* =============================================================
   BEDROCK MUSIC — shared site data (single source of truth)
   Both index.html (hub) and artist.html (individual pages) read
   from this file.

   HOW TO UPDATE:
   - Add/edit an artist in BEDROCK.roster below.
   - Each link is { type, url, primary }.
       • type  -> controls the icon + label (see ICONS/LABELS in
                  the pages). Supported: spotify, appleMusic,
                  youtubeMusic, amazonMusic, tidal, deezer,
                  soundcloud, bandcamp, pandora, audiomack,
                  instagram, tiktok, youtube, x, facebook,
                  threads, discord, bandsintown, laylo, website,
                  merch, email.
       • primary: true  -> also shown on the home hub (keep this to
                  the few most important links). All links show on
                  the artist's own page regardless.
   - slug -> the clean URL, e.g. slug "veaux" => bedrockent.com/veaux
   - bio  -> short paragraph shown on the artist page. Leave the
             placeholder text and fill in later.
   - To add merch: add { type: "merch", url: "https://..." } to
     that artist's links.
   ============================================================= */
window.BEDROCK = {
  brand: {
    name: "BEDROCK",
    tagline: "Music · Management",
    logoImage: ""
  },

  roster: [
    {
      name: "Enola Gay",
      slug: "enola-gay",
      bio: "",
      links: [
        { type: "spotify",     url: "https://open.spotify.com/artist/1CT7BjCVYK5vr9SNr7WlEP", primary: true },
        { type: "instagram",   url: "https://www.instagram.com/enolagay_band/", primary: true },
        { type: "bandsintown", url: "https://www.bandsintown.com/a/15489575-enola-gay", primary: true },
        { type: "appleMusic",  url: "https://music.apple.com/us/artist/enola-gay/1519132751" },
        { type: "youtubeMusic",url: "https://music.youtube.com/channel/UCGTtF-9d9-k9wXAq1jjAHaQ" },
        { type: "youtube",     url: "https://www.youtube.com/@enolagay_band" },
        { type: "tidal",       url: "https://tidal.com/artist/5409716" },
        { type: "amazonMusic", url: "https://music.amazon.com/artists/B00I9G10UG/enola-gay" },
        { type: "deezer",      url: "https://www.deezer.com/en/artist/5507474" },
        { type: "soundcloud",  url: "https://soundcloud.com/joe-mcveigh-596346972" },
        { type: "bandcamp",    url: "https://enolagay1.bandcamp.com/" },
        { type: "pandora",     url: "https://www.pandora.com/artist/enola-gay/ARjht2gzhwZk349" },
        { type: "audiomack",   url: "https://audiomack.com/enola-gay" },
        { type: "tiktok",      url: "https://www.tiktok.com/@enolagayband" },
        { type: "facebook",    url: "https://www.facebook.com/enolagaybelfast" }
      ]
    },
    {
      name: "Golden Cats",
      slug: "golden-cats",
      bio: "",
      links: [
        { type: "spotify",     url: "https://open.spotify.com/artist/2jmo1S0qDb6WzvNfTf6PUr", primary: true },
        { type: "instagram",   url: "https://www.instagram.com/goldencatsmusic", primary: true },
        { type: "tiktok",      url: "https://www.tiktok.com/@goldencatsmusic", primary: true },
        { type: "appleMusic",  url: "https://music.apple.com/us/artist/golden-cats/1718684055" },
        { type: "youtubeMusic",url: "https://music.youtube.com/channel/UC6CvuBW69B6MwRBx0NsZQRg" },
        { type: "youtube",     url: "https://www.youtube.com/@goldencatsmusic" },
        { type: "deezer",      url: "https://www.deezer.com/us/artist/244135702" },
        { type: "soundcloud",  url: "https://soundcloud.com/goldencatss" },
        { type: "audiomack",   url: "https://audiomack.com/golden-cats" },
        { type: "bandsintown", url: "https://www.bandsintown.com/a/8286249-golden-cats" },
        { type: "laylo",       url: "https://laylo.com/goldencats/profile" },
        { type: "x",           url: "https://x.com/goldencatsmusic" },
        { type: "facebook",    url: "https://www.facebook.com/61556386653985" },
        { type: "discord",     url: "https://discord.gg/6swpscYhtm" }
      ]
    },
    {
      name: "Kyndal",
      slug: "kyndal",
      bio: "",
      links: [
        { type: "spotify",     url: "https://open.spotify.com/artist/4VFMlrDAmF0wwua3FVD8Qx", primary: true },
        { type: "instagram",   url: "https://www.instagram.com/kyndalinskeep/", primary: true },
        { type: "tiktok",      url: "https://www.tiktok.com/@kyndalofficial", primary: true },
        { type: "website",     url: "https://www.kyndalmusic.com/", primary: true },
        { type: "appleMusic",  url: "https://music.apple.com/us/artist/kyndal-inskeep/1277469846" },
        { type: "youtubeMusic",url: "https://music.youtube.com/channel/UCztY0k7wxvRutH73RrH8cfg" },
        { type: "youtube",     url: "https://www.youtube.com/channel/UCztY0k7wxvRutH73RrH8cfg" },
        { type: "tidal",       url: "https://tidal.com/artist/9076242" },
        { type: "amazonMusic", url: "https://music.amazon.com/artists/B075859L26/kyndal-inskeep" },
        { type: "deezer",      url: "https://deezer.com/artist/13098585" },
        { type: "soundcloud",  url: "https://soundcloud.com/kyndalinskeepmusic" },
        { type: "audiomack",   url: "https://audiomack.com/kyndal-inskeep-1" },
        { type: "bandsintown", url: "https://www.bandsintown.com/a/15515080-kyndal-inskeep" },
        { type: "laylo",       url: "https://laylo.com/kyndal/profile" },
        { type: "x",           url: "https://x.com/kyndalinskeep" },
        { type: "facebook",    url: "https://www.facebook.com/KyndalOfficial/" },
        { type: "threads",     url: "https://www.threads.com/@kyndalinskeep" }
      ]
    },
    {
      name: "VEAUX",
      slug: "veaux",
      bio: "",
      links: [
        { type: "spotify",     url: "https://open.spotify.com/artist/1asSK5d79kA4LoNp4LmV3z", primary: true },
        { type: "instagram",   url: "https://www.instagram.com/veauxmusic/", primary: true },
        { type: "tiktok",      url: "https://www.tiktok.com/@veauxveauxveaux", primary: true },
        { type: "website",     url: "https://www.veauxmusic.com/", primary: true },
        { type: "appleMusic",  url: "https://music.apple.com/us/artist/veaux/1052261438" },
        { type: "youtubeMusic",url: "https://music.youtube.com/channel/UCWp7aNFg0Tj7qQ1d2aCS5Jg" },
        { type: "youtube",     url: "https://www.youtube.com/@VEAUXmusic" },
        { type: "tidal",       url: "https://tidal.com/artist/7330582" },
        { type: "amazonMusic", url: "https://music.amazon.com/artists/B0799Z2Y74" },
        { type: "deezer",      url: "https://deezer.com/artist/14128799" },
        { type: "soundcloud",  url: "https://soundcloud.com/theveauxmusic" },
        { type: "bandcamp",    url: "https://veaux.bandcamp.com/" },
        { type: "pandora",     url: "https://pandora.com/artist/veaux/ARzPmKj2qd4ZVZw" },
        { type: "audiomack",   url: "https://audiomack.com/veauxmusic" },
        { type: "bandsintown", url: "https://www.bandsintown.com/a/15116648-veaux" },
        { type: "laylo",       url: "https://laylo.com/veauxmusic" },
        { type: "x",           url: "https://x.com/VEAUXMUSIC" },
        { type: "facebook",    url: "https://www.facebook.com/VEAUXMUSIC" },
        { type: "threads",     url: "https://www.threads.com/@veauxmusic" }
      ]
    },
    {
      name: "Walker Burroughs",
      slug: "walker-burroughs",
      bio: "",
      links: [
        { type: "spotify",     url: "https://open.spotify.com/artist/3IbC67wKy65bRFv0htSIxQ", primary: true },
        { type: "instagram",   url: "https://www.instagram.com/walkerburroughs/", primary: true },
        { type: "tiktok",      url: "https://www.tiktok.com/@walkerburroughs", primary: true },
        { type: "bandsintown", url: "https://www.bandsintown.com/a/15530829-walker-burroughs", primary: true },
        { type: "appleMusic",  url: "https://music.apple.com/us/artist/walker-burroughs/1405110754" },
        { type: "youtubeMusic",url: "https://music.youtube.com/channel/UC5q2k_gGRnE8OVtoQgExWOw" },
        { type: "youtube",     url: "https://www.youtube.com/@WalkerBurroughs" },
        { type: "tidal",       url: "https://tidal.com/artist/43885197" },
        { type: "amazonMusic", url: "https://music.amazon.com/artists/B07F3J2RQ1" },
        { type: "deezer",      url: "https://www.deezer.com/en/artist/15319603" },
        { type: "soundcloud",  url: "https://soundcloud.com/walkerburroughs" },
        { type: "bandcamp",    url: "https://walkerburroughs.bandcamp.com/track/pretty-penny" },
        { type: "pandora",     url: "https://www.pandora.com/artist/walker-burroughs/AR6Pb264grz4P7m" },
        { type: "x",           url: "https://x.com/walkerburroughs" },
        { type: "facebook",    url: "https://www.facebook.com/WalkerBurPage" },
        { type: "threads",     url: "https://www.threads.com/@walkerburroughs" }
      ]
    }
  ],

  ventures: [
    {
      name: "Headliners Nashville",
      links: [
        { type: "website",   url: "https://headlinersnashville.com/", primary: true },
        { type: "instagram", url: "https://www.instagram.com/headlinersnashville/", primary: true },
        { type: "submit",    url: "https://forms.gle/4bRWHHQapfGVaZiV7", label: "Play the show", primary: true }
      ]
    },
    {
      name: "Festival University",
      links: [
        { type: "instagram", url: "https://www.instagram.com/festival.university/", primary: true },
        { type: "donate",    url: "https://secure.givelively.org/donate/festival-university", label: "Donate", primary: true }
      ]
    }
  ]
};

/* Shared icon + label + grouping definitions used by both pages. */
window.BEDROCK_ICONS = {
  instagram:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  spotify:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34a.75.75 0 01-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 11-.33-1.46c4.56-1.04 8.48-.59 11.64 1.34.36.22.47.69.26 1.03zm1.47-3.27a.93.93 0 01-1.28.31c-3.23-1.99-8.16-2.56-11.99-1.4a.93.93 0 11-.54-1.78c4.37-1.32 9.79-.69 13.5 1.59.45.27.59.86.31 1.28zm.13-3.41C15.42 8.71 8.93 8.51 5.25 9.62a1.12 1.12 0 11-.65-2.14c4.22-1.28 11.39-1.04 15.88 1.62a1.12 1.12 0 11-1.16 1.92z"/></svg>',
  appleMusic: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.014H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.18 3.34.45 2.004.963 1.04 1.85.475 3.143c-.219.49-.353 1.005-.46 1.523C.124 5.018.083 5.378.04 5.74c-.013.117-.024.235-.04.352V18.13c.013.117.027.234.04.351.066.585.169 1.16.397 1.708.474 1.13 1.245 2.022 2.225 2.687.95.643 2.014.965 3.156 1.078.484.05.97.072 1.456.072 4.05.005 8.097.003 12.146-.005.444 0 .888-.027 1.33-.084.737-.094 1.443-.296 2.118-.602 1.193-.547 2.13-1.4 2.785-2.587.323-.587.516-1.214.624-1.872.093-.563.135-1.13.15-1.7.003-.04.01-.08.014-.12V6.124z"/></svg>',
  youtubeMusic:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zM9.6 8.4l6 3.6-6 3.6z"/></svg>',
  amazonMusic:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.03 15.61c-1.3.96-3.18 1.47-4.8 1.47-2.27 0-4.32-.84-5.87-2.24-.12-.11-.01-.26.14-.17 1.67.97 3.74 1.56 5.88 1.56 1.44 0 3.03-.3 4.49-.92.22-.09.4.15.18.31zm.54-.62c-.17-.21-1.1-.1-1.52-.05-.13.02-.15-.09-.03-.17.74-.52 1.96-.37 2.1-.2.14.18-.04 1.4-.73 1.98-.11.09-.21.04-.16-.08.15-.39.49-1.28.34-1.48zM8.9 6.5v-.87c0-.13.1-.22.22-.22h3.9c.13 0 .23.09.23.22v.75c0 .13-.11.29-.3.55l-2.02 2.88c.75-.02 1.54.09 2.22.47.15.09.19.21.2.34v.93c0 .13-.14.28-.29.2-1.2-.63-2.79-.7-4.11.01-.14.07-.29-.08-.29-.21v-.88c0-.14 0-.39.15-.61l2.34-3.36H9.13c-.13 0-.23-.09-.23-.22zM4.5 12.9h-1.2c-.11 0-.2-.08-.21-.19V5.65c0-.12.1-.21.22-.21h1.11c.12 0 .21.09.22.2v.94h.02c.29-.77.83-1.13 1.56-1.13.74 0 1.21.36 1.54 1.13.29-.77.94-1.13 1.64-1.13.5 0 1.04.2 1.37.67.37.51.3 1.26.3 1.91v3.77c0 .12-.1.21-.22.21H9.85c-.12 0-.21-.09-.21-.21V9.5c0-.26.02-.9-.03-1.14-.09-.4-.35-.51-.68-.51-.28 0-.57.19-.69.48-.12.3-.11.79-.11 1.17v3.16c0 .12-.1.21-.22.21H6.9c-.12 0-.21-.09-.21-.21l-.01-3.16c0-.66.11-1.64-.71-1.64-.83 0-.8 1.03-.8 1.64v3.16c0 .12-.09.21-.21.21z"/></svg>',
  tidal:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.016 12l4.004-4.004-4.008-4.004zm4.984 4.004L20.996 12l-4 4.004L12.992 12l4.004-4.004z"/></svg>',
  deezer:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.81 4.16h5.19v3.03h-5.19zM18.81 8.4h5.19v3.03h-5.19zM18.81 12.64h5.19v3.03h-5.19zM12.4 12.64h5.19v3.03H12.4zM6 12.64h5.19v3.03H6zM0 12.64h5.19v3.03H0zM6 16.88h5.19v3.03H6zM12.4 16.88h5.19v3.03H12.4zM18.81 16.88h5.19v3.03h-5.19zM0 16.88h5.19v3.03H0z"/></svg>',
  soundcloud: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.165h-8.18a.68.68 0 01-.675-.683V7.862a.747.747 0 01.452-.724s.75-.513 2.333-.513a5.349 5.349 0 015.349 5.347c0 .046-.002.09-.003.135.207-.05.42-.076.635-.076 1.488 0 2.654 1.118 2.501 2.654-.025.245-.04.323-.012.48zM10.621 8.875v8.05a.276.276 0 01-.275.275h-.55a.276.276 0 01-.275-.275v-8.05a.276.276 0 01.275-.275h.55a.276.276 0 01.275.275zM8.246 9.125v7.8a.276.276 0 01-.275.275h-.55a.276.276 0 01-.275-.275v-7.8a.276.276 0 01.275-.275h.55a.276.276 0 01.275.275zM5.871 10v6.925a.276.276 0 01-.275.275h-.55a.276.276 0 01-.275-.275V10a.276.276 0 01.275-.275h.55a.276.276 0 01.275.275zM3.496 11v5.925a.276.276 0 01-.275.275h-.55a.276.276 0 01-.275-.275V11a.276.276 0 01.275-.275h.55a.276.276 0 01.275.275zM1.121 12.25v3.425a.276.276 0 01-.275.275h-.55A.276.276 0 010 15.675V12.25a.276.276 0 01.275-.275h.55a.276.276 0 01.296.275z"/></svg>',
  bandcamp:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/></svg>',
  pandora:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.882 0v24h6.196v-8.28h4.542c5.144 0 8.498-3.29 8.498-7.86C21.618 3.29 18.264 0 13.12 0zm6.196 5.1h3.87c2.15 0 3.474 1.06 3.474 2.76 0 1.7-1.324 2.76-3.474 2.76h-3.87z"/></svg>',
  audiomack:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.2 16.8H8.4v-6h2.4zm4.8 1.2h-2.4V6h2.4zm-9.6-2.4H3.6v-3.6H6z"/></svg>',
  tiktok:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/></svg>',
  youtube:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  x:          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  facebook:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  threads:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.056 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.978 5.287 5.388.108.046.216.094.324.145 1.52.715 2.631 1.798 3.213 3.132.812 1.86.887 4.897-1.585 7.309-1.888 1.844-4.181 2.68-7.311 2.702z"/></svg>',
  discord:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.74 19.74 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.1 13.1 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.893.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.056c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
  bandsintown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4z"/><line x1="12" y1="7" x2="12" y2="17"/></svg>',
  laylo:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  website:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  merch:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2l1.5 3h9L18 2"/><path d="M4 7h16l-1 15H5z"/><path d="M9 11a3 3 0 006 0"/></svg>',
  submit:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
  donate:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  email:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  default:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>'
};

window.BEDROCK_LABELS = {
  instagram: "Instagram", spotify: "Spotify", appleMusic: "Apple Music",
  youtubeMusic: "YouTube Music", amazonMusic: "Amazon Music", tidal: "Tidal",
  deezer: "Deezer", soundcloud: "SoundCloud", bandcamp: "Bandcamp",
  pandora: "Pandora", audiomack: "Audiomack", tiktok: "TikTok",
  youtube: "YouTube", x: "X", facebook: "Facebook", threads: "Threads",
  discord: "Discord", bandsintown: "Bandsintown", laylo: "Laylo",
  website: "Website", merch: "Merch", submit: "Play the show", donate: "Donate", email: "Email"
};

/* Which section each link type belongs to on the artist page. */
window.BEDROCK_GROUPS = {
  Listen: ["spotify", "appleMusic", "youtubeMusic", "amazonMusic", "tidal", "deezer", "soundcloud", "bandcamp", "pandora", "audiomack"],
  Follow: ["instagram", "tiktok", "youtube", "x", "facebook", "threads", "discord", "laylo"],
  Live:   ["bandsintown"],
  More:   ["website", "merch", "donate", "email"]
};

# Parlay Packout — Shareable Web Version

This is the read-only companion to your desktop app: today's slate, injuries,
props, moneyline leans (live where Kalshi has a match, model estimate
otherwise), parlay builder, and news wire. No trading in this version — see
"Why no trading here" below.

You need to put these files somewhere with a public URL before you can text a
link to anyone. I can't host it for you from here, but any of these takes
about 2 minutes:

## Option A — Netlify Drop (fastest, free)
1. Go to https://app.netlify.com/drop in a browser.
2. Drag this whole folder onto the page.
3. Netlify gives you a live URL immediately (e.g. `random-name-123.netlify.app`).
4. Text that URL to your friends.

## Option B — Vercel
1. `npm i -g vercel` (needs Node installed)
2. From this folder: `vercel --prod`
3. Follow the prompts — you'll get a URL.

## Option C — GitHub Pages
1. Create a new GitHub repo, push this folder's contents to it.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. GitHub gives you a `https://yourname.github.io/reponame/` URL.

Any of these works — pick whichever you already have an account for.

## What your friends do

1. Open the link on their iPhone in **Safari** (not Chrome — "Add to Home
   Screen" only works from Safari on iOS).
2. Tap the Share icon (square with an arrow) → **Add to Home Screen**.
3. They now have a real app icon on their home screen that opens full-screen,
   no browser chrome, just like a native app.

## Why no trading here

The desktop app's Trading Desk needs a place to sign requests with your
private key or hold your Kalshi session securely — that's your Electron app's
main process, running only on your machine. A page you text to friends is the
opposite of that: it's public, shared, and anyone with the link can open it.
Live *or* even paper trading in that context adds real confusion risk (is
this real money? whose account?) for very little benefit. This version is
intentionally research-only.

## Updating the slate

Like the desktop app, the game data is hand-written into `index.html` from
each morning's research (`const games = [...]`). Re-deploy (drag the folder
into Netlify again, etc.) whenever you want to push a new day's slate live.

## Live odds note

This version polls Kalshi's public market data directly from the browser.
Kalshi's public endpoints are meant to support exactly this kind of client-side
use, so it should work, but if your friends' browsers ever show "Live odds
unavailable in-browser," the page just falls back to the model estimates —
nothing breaks, it just won't show the "● LIVE" badge.

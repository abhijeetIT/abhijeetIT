# Abhijeet Jha — Portfolio

A single-page portfolio site (About, Resume, Projects) — no build tools, no
frameworks, pure HTML/CSS/JS. Sections switch instantly with JavaScript
(no page reloads).

## Structure

```
portfolio/
├── index.html                  # all three sections (about / resume / projects)
├── css/style.css                # black / gray / yellow theme
├── js/script.js                 # tab switching + skills/projects data
├── assets/
│   ├── favicon.svg / .png       # browser tab icon (already made)
│   ├── apple-touch-icon.png     # iOS home-screen icon (already made)
│   ├── og-cover.png             # social share preview card (already made)
│   └── images/
│       ├── profile.jpg          # ← add your headshot here
│       └── projects/
│           ├── spendsnap.png            # ← add real screenshots here
│           ├── restrocloud.png
│           └── student-management.png
└── README.md
```

## Adding your own photo and project screenshots

The site is built to **degrade gracefully** — it already looks complete
without any of these, and automatically upgrades once you add them.

- **Profile photo**: drop a square image into `assets/images/` named
  `profile` — extension doesn't matter, the page automatically tries
  `.jpg`, `.jpeg`, `.png` and `.webp` in turn and uses whichever exists.
  (At least 500×500px, well-lit headshot works best.)
- **Project screenshots**: drop images into `assets/images/projects/`
  named `spendsnap`, `restrocloud`, and `student-management` — again, any
  of `.jpg` / `.jpeg` / `.png` / `.webp` works, no need to match the
  extension exactly. Recommended 1200×900px (4:3), a clean shot of each
  app's main screen.
- Both `.txt` notes inside those folders explain the same thing — delete
  them once you've dropped in your real images.
- If a photo still doesn't show up: double-check the **filename spelling**
  (no extra spaces, matches exactly: `profile`, `spendsnap`, `restrocloud`,
  `student-management`) — the extension itself is the one thing you no
  longer need to get exactly right.

## Run locally

No build step needed. Either:

- Double-click `index.html`, or
- From this folder, run a tiny local server (recommended, avoids browser
  file:// restrictions):
  ```
  python3 -m http.server 8000
  ```
  then open http://localhost:8000

## Deploy to GitHub Pages (free, live URL)

1. Create a new GitHub repo, e.g. `portfolio` (or `<your-username>.github.io`
   if you want it at the root of your GitHub domain).
2. Push this folder's contents to the repo:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/abhijeetIT/portfolio.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait ~1 minute, then GitHub shows your live URL:
   - `https://abhijeetIT.github.io/portfolio/` (repo site), or
   - `https://abhijeetIT.github.io/` (if the repo is named
     `abhijeetIT.github.io`).

Every future `git push` to `main` updates the live site automatically.

## Editing content

All text content lives in two places:

- **About / Resume / Education**: directly inside `index.html`.
- **Skills and Projects**: as data arrays at the top of `js/script.js`
  (`skillGroups` and `projects`) — edit these arrays and the page
  re-renders itself, no HTML editing needed.

## Notes

- **Resume** is now a real PDF (`assets/Abhijeet_Jha_Resume.pdf`, converted
  from your original Word doc) — the "resume.pdf" link in the sidebar and
  the footer open it directly in a new tab. There's no more in-page resume
  view; replace that file with an updated PDF any time and the link keeps
  working automatically (same filename).
- **Live Demo / GitHub** on each project is now a prominent yellow button
  right under the description, and clicking the project's screenshot or
  title also opens that same link — no more hunting for a small link at
  the bottom of the card.
- Each project shows just its one-line description by default; click
  **"Read more"** to expand the full bullet list.
- A persistent contact footer ("Have a role in mind?") appears at the
  bottom of every tab, with your email, GitHub, LinkedIn and Resume.
- Project thumbnails fall back to simple inline SVG icons until you add
  real screenshots — see above.
- A social preview card (`assets/og-cover.png`) is already wired up via
  Open Graph / Twitter meta tags in `index.html`, so the link looks
  intentional when shared on LinkedIn, WhatsApp, etc. Replace it with your
  own 1200×630px image any time by swapping the file.
- Favicon and iOS home-screen icon are already generated in your brand
  colors (`assets/favicon.svg`, `assets/favicon.png`,
  `assets/apple-touch-icon.png`).
- Skill chips show "used in" context — tap (mobile) or hover (desktop) any
  chip to see which project it's tied to.
- Fonts (Inter, JetBrains Mono) load from Google Fonts via CDN — remove the
  `<link>` tags in `index.html` and add local fonts if you need a fully
  offline build.

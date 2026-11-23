# Pranay ❤ Priyanka — Wedding Website
Plain HTML/CSS/JS. No build step. Open `index.html` or deploy as-is.

## Edit details
All names, date, phone, coordinates, quiz questions and gallery live in `js/config.js`. Translations live in `js/i18n.js`.

## Add your media
| File | What |
|---|---|
| `assets/videos/seven-pheras.mp4` | Final 3D Seven Pheras film |
| `assets/images/*` + `gallery` in config.js | Add more family/childhood photos (couple and individual photos are already added) |
| `assets/images/poster.svg` | Video poster. WhatsApp preview now uses `couple-1.jpg`; a 1200×630 crop is ideal |

Missing music or video shows a friendly note; nothing breaks.

## RSVP and blessings (honest note)
- RSVP: with `formEndpoint` empty, the form opens WhatsApp to 8790876174. For real storage, create a free Formspree form and paste its URL in `config.js`.
- Blessings wall: saved only in the visitor's own browser. A shared wall needs a backend (e.g. Firebase/Supabase) — not connected.

## Deploy (Android-friendly)
1. Download and extract the ZIP.
2. Sign in at github.com → New repository.
3. Upload all files, keeping the folders (css, js, assets).
4. Sign in at vercel.com with GitHub → Add New Project → pick the repo.
5. Framework: Other. Leave build settings empty → Deploy.
6. Open the Vercel link on Android Chrome and test language, music, map, games.

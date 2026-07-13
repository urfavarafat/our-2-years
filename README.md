# Project Starlight 🌌

A cinematic anniversary website for Yeasin & Meghna — built with plain HTML, CSS, and JavaScript. No build step, no frameworks. Works directly on GitHub Pages.

## Folder structure

```
index.html
style.css
script.js
images/   → your photos + favicon + og-cover
music/    → your background song
icons/    → favicon.png
fonts/    → (optional, currently loads Poppins & Playfair Display from Google Fonts)
```

## 1. Add your photos

Drop these files into `/images` using these exact names (referenced by the timeline & gallery):

```
image1.jpg   → First Meet (14 July 2024)
image2.jpg   → First Date (13 Nov 2024)
image3.jpg   → Second Date & Birthday Date (Rupkotha)
image4.jpg   → Fourth Date
image5.jpg   → Fifth Date
image6.jpg   → Sixth Date
image7.jpg   → Seventh Date
image8.jpg   → Eighth Date
image9.jpg   → Eleventh Date (Khalek Park)
image10.jpg  → Tong Tee Cafe
image11.jpg  → My Birthday (13 May 2026)
og-cover.jpg → used for social share previews (1200×630 recommended)
```

Until a photo is added, that spot automatically shows a soft glass placeholder instead of a broken image — nothing looks broken while you're filling things in.

## 2. Add your song

Put your track at `music/our-song.mp3`. It only starts playing after the visitor taps "Enter Our Story" (browsers block autoplay with sound, and this also respects the person's choice).

## 3. Add a favicon

Drop a square PNG at `icons/favicon.png`.

## 4. The secret passcode

The finale section asks for a passcode. It's currently set to **14July** (case-insensitive, spaces ignored). To change it, open `script.js` and edit:

```js
const PASSCODE = '14july'; // lowercase, no spaces
```

## 5. Deploy on GitHub Pages

1. Create a new GitHub repository and push this whole folder to it.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, pick `main` and `/root`.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No build tools, no `npm install`, nothing else required.

## Notes

- Fully responsive: horizontal star-timeline on desktop, vertical on mobile/tablet.
- Respects `prefers-reduced-motion` — animations simplify automatically for visitors who've asked for that.
- All colors, type, and animation are hand-tuned in `style.css` under the token comment block at the top — that's the place to retune the palette.

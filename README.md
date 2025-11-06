# Seb's Garden — Modern Minimal (v2)

This package contains a polished one-page site (French) designed to be uploaded to GitHub Pages.
Files:
- index.html
- styles.css
- script.js
- assets/placeholder.svg

Features:
- Modern / minimal UI (dark blue + gold accent)
- Hero section (blank background so you can add your own image later)
- Full-screen menu overlay with 3 sections:
  1. Entrées froides (8 slots)
  2. Entrées chaudes (7 slots)
  3. Nos spécialités camemberts (4 slots)
- Each slot includes a `<model-viewer>` ready for `data-src` (GLB) and `data-ios-src` (USDZ).
- Overlay supports closing via backdrop click, Esc key, and "Fermer" button.
- To add your models: set `data-src` to your .glb URL and `data-ios-src` to your .usdz URL, e.g.:
  `<model-viewer data-src="3d/plat1.glb" data-ios-src="3d/plat1.usdz"></model-viewer>`
- Replace `<h4 class="dish-name">–</h4>` with the dish name in French.

Deploy:
- Upload to GitHub and enable GitHub Pages, or push to the `docs/` folder in your repo. The site is static and uses only vanilla HTML/CSS/JS.

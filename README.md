
# Sebs Garden — Static Frontend (Ready for GitHub)

This is a ready-to-upload static website scaffold based on the screenshots you provided.
Colors are taken from your color image (deep blue + gold). Project name: **Sebs Garden**.

## What is included
- index.html — main page
- assets/styles.css — styling
- assets/main.js — small JS for interaction
- assets/img/hero1.jpg, menu_hero.jpg, color_ref.jpg — images you uploaded
- models/sample.glb, models/sample.usdz — placeholders. Replace with your real 3D models.

## AR + 3D preview
- The site uses `<model-viewer>` for in-page 3D preview and AR.
- For iOS Quick Look (AR Quick Look), the AR button links to `models/sample.usdz`. Replace that file with a proper USDZ file and make sure the file is publicly accessible on GitHub Pages.
- For best results:
  - Put `.glb` for model-viewer `src`.
  - Provide `ios-src="models/your.usdz"` for Apple Quick Look.
  - On iOS, Quick Look will open when an <a rel="ar" href="..."> link points to a USDZ file.

## How to deploy
1. Create a new GitHub repo.
2. Upload the contents of this ZIP (or drag & drop folder).
3. Enable GitHub Pages from the repository settings (use the main branch / root).
4. Your site will be available at `https://<username>.github.io/<repo>/`

## Notes
- Replace the placeholder model files with real `.glb` and `.usdz` files.
- If you want me to fill the menu with more items or wire up a backend, tell me and I'll add it.

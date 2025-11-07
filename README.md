SEB’S GARDEN – WEBSITE SETUP

1. Upload this folder to GitHub or Cloudflare Pages.
2. Keep the folder structure exactly as it is.
3. Replace demo.glb and demo.usdz in /assets with your own Cloudflare R2 links.
4. Update menu.html:
   <button onclick="view3D('YOUR_R2_GLTF_LINK')">Voir en 3D</button>
   <button onclick="viewAR('YOUR_R2_USDZ_LINK')">Voir en AR</button>
5. Deploy and test:
   - Android: “Voir en 3D” button opens viewer.
   - iPhone: “Voir en AR” opens AR Quick Look.

# Seb's Garden — One-page demo (Menu 3D placeholders)

Contenu fourni:
- `index.html` — page principale (FR)
- `styles.css` — styles (thème : bleu foncé + doré)
- `script.js` — interactions (dropdown, fermeture auto)
- `assets/placeholder.svg` — petite icône placeholder pour les slots
- `README.md` — ce fichier

Instructions rapides:
1. Déployez ces fichiers sur GitHub Pages ou dans le dossier `docs/` d'un repo.
2. Pour chaque slot (chaque élément `.dish`), remplacez l'attribut `data-src` par le chemin vers votre fichier `.glb` et `data-ios-src` par votre fichier `.usdz`. Par exemple:
   ```html
   <model-viewer data-src="3d/ete-en-provence.glb" data-ios-src="3d/ete-en-provence.usdz" ...></model-viewer>
   ```
   Le script déplacera automatiquement `data-src` → `src` pour charger le modèle.
3. Les boutons AR apparaîtront automatiquement dans `<model-viewer>` lorsque le périphérique les supporte.
4. Tous les emplacements sont vides: remplacez aussi le contenu `<h4 class="dish-name">–</h4>` par le nom du plat.

Notes:
- Le dropdown se ferme automatiquement si l'utilisateur clique en dehors.
- L'ouverture du menu utilise une animation douce (déplacement + fondu).
- Texte en français, prêt pour GitHub.

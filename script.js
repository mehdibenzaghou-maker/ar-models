function view3D(modelUrl) {
  const viewer = document.createElement('model-viewer');
  viewer.src = modelUrl;
  viewer.style.width = '100%';
  viewer.style.height = '400px';
  viewer.setAttribute('camera-controls', '');
  viewer.setAttribute('auto-rotate', '');
  const popup = window.open('', '_blank');
  popup.document.write('<title>Vue 3D</title>');
  popup.document.body.appendChild(viewer);
}

function viewAR(modelUrl) {
  window.open(modelUrl, '_blank');
}

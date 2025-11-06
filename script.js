// Overlay open/close logic, progressive model-viewer src assign, keyboard accessibility
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const discoverBtn = document.getElementById('discoverBtn');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('closeOverlay');
  const backdrop = document.getElementById('overlayBackdrop');

  function openOverlay(){
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay(){
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openOverlay);
  discoverBtn.addEventListener('click', openOverlay);
  closeBtn.addEventListener('click', closeOverlay);
  backdrop.addEventListener('click', closeOverlay);

  // Close with ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeOverlay();
  });

  // Move data-src/data-ios-src to src/ios-src for model-viewer to load when present.
  const setSrcs = () => {
    const viewers = document.querySelectorAll('model-viewer.mv');
    viewers.forEach(v => {
      const ds = v.getAttribute('data-src');
      const ios = v.getAttribute('data-ios-src');
      if(ds && !v.getAttribute('src')) v.setAttribute('src', ds);
      if(ios && !v.getAttribute('ios-src')) v.setAttribute('ios-src', ios);
    });
  };

  // Call once on open to allow lazy assignment if you want to keep models unloaded until menu visible.
  menuToggle.addEventListener('click', setSrcs);
  discoverBtn.addEventListener('click', setSrcs);
});

// Menu dropdown toggle + close on outside click + progressive enhancement for model-viewer data-src
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuBtn');
  const menuDropdown = document.getElementById('menuDropdown');

  function openMenu(){
    menuDropdown.setAttribute('aria-hidden','false');
  }
  function closeMenu(){
    menuDropdown.setAttribute('aria-hidden','true');
  }
  menuBtn.addEventListener('click', function(e){
    const hidden = menuDropdown.getAttribute('aria-hidden') === 'true';
    if(hidden) openMenu(); else closeMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', function(e){
    const target = e.target;
    if(!menuDropdown.contains(target) && target !== menuBtn){
      closeMenu();
    }
  });

  // Progressive: if model-viewer elements have data-src attributes, move them to src so model-viewer loads them.
  const viewers = document.querySelectorAll('model-viewer.model-viewer-placeholder');
  viewers.forEach(v => {
    const dataSrc = v.getAttribute('data-src');
    const iosSrc = v.getAttribute('data-ios-src');
    if(dataSrc) v.setAttribute('src', dataSrc);
    if(iosSrc) v.setAttribute('ios-src', iosSrc);
  });
});

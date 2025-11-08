// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Automatic AR activation for model-viewer
window.addEventListener('DOMContentLoaded',()=>{
  const mv=document.getElementById('mv');
  if(!mv) return;
  mv.addEventListener('click', async (ev)=>{
    try{
      if(mv.canActivateAR){ await mv.enterAR(); }
      else if(typeof mv.enterAR==='function'){ await mv.enterAR(); }
    }catch(err){ console.log('AR non disponible:',err); }
  });
});

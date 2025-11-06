
// Simple interactions: menu button scroll, active category highlight
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuBtn');
  const categoryBar = document.getElementById('categoryBar');
  menuBtn.addEventListener('click', ()=> {
    // toggle simple menu: scroll to categories
    categoryBar.scrollIntoView({behavior:'smooth'});
  });

  // active state when clicking categories
  document.querySelectorAll('.cat').forEach(el=>{
    el.addEventListener('click', (e)=>{
      document.querySelectorAll('.cat').forEach(c=>c.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
});

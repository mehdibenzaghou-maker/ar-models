document.getElementById('year').textContent = new Date().getFullYear();

// Simple demo hooks for buttons (placeholders)
document.querySelectorAll('.btn-gold').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    // prevent default if href='#'
    if(btn.getAttribute('href') === '#') e.preventDefault();
    // simple visual feedback
    btn.animate([{transform:'scale(1)'},{transform:'scale(0.98)'},{transform:'scale(1)'}],{duration:180});
  });
});
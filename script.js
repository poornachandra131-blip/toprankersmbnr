const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
}
const form = document.querySelector('#enquiryForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const course = data.get('course') || '';
    const message = data.get('message') || '';
    const text = `Hello Top Rankers' Academy, I would like to enquire about admission.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACourse: ${encodeURIComponent(course)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919553222228?text=${text}`,'_blank');
  });
}

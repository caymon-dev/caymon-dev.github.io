//--------------------Burger--------------------------------
const menu = document.querySelector('.menu'),
      burger = document.querySelector('.burger'),
      closeElement = document.querySelector('.menu__close'),
      menuItem = document.querySelectorAll(".menu__link");

burger.addEventListener('click', ()=>{
   menu.classList.add('active');
});

closeElement.addEventListener('click', ()=>{
   menu.classList.remove('active');
});

menuItem.forEach(item => {
   item.addEventListener('click', () => {
      menu.classList.toggle('active');
   })
})



const scroll = document.querySelector(".page-up");
scroll.addEventListener('click', ()=>{
   window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
   if (pageYOffset > 500) {
      scroll.style.cssText = "display: block";
   } else {
      scroll.style.cssText = "display: none";
   }
 });

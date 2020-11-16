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


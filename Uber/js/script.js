window.addEventListener('DOMContentLoaded', () => {
   const hamburger = document.querySelector('.hamburger'),
         menu = document.querySelector('.menu'),
         menuItem = document.querySelectorAll('.menu__item');
   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__active');
      menu.classList.toggle('menu__active');
   });

   menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger__active');
          menu.classList.toggle('menu__active');
      })
  })
});


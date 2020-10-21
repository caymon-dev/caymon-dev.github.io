$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1000,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></button>',
      responsive: [
         {
            breakpoint: 575,
            settings: {
               dots: true,
               arrows: false,
            }
         },
      ],
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };

   toggleSlide(".catalog-item__link");
   toggleSlide(".catalog-item__back");

   // ---------------------------------Modal-----------------------------------------
   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
   });

   $('.button_mini').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      })
   });
   //------------------------Validation-----------------------------------------------
   function validateForms(form) {
      $(form).validate({
         rules: {
            name: {
               required: true,
               minlength: 2
            },
            phone: "required",
            email: {
               required: true,
               email: true,
            }
         },
         messages: {
            name: {
               required: "Пожалуйста, введите свое имя",
               minlength: jQuery.validator.format("Имя должно быть не меньше {0}-х символов!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
               required: "Пожалуйста, введите свою почту",
               email: "Ваша почта не соответствует виду: name@domain.com"
            }
         }
      });
   }

   validateForms('#consultation form');
   validateForms('#order form');
   validateForms('#consultation-form');
   //------------------------Input Mask-----------------------------------------------
   $('input[name=phone]').mask("+8 (999) 999-99-99");

   //------------------------Send Mail---------------------
   $('form').submit(function (e) {
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "../mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find('input').val('');
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn();
         $('form').trigger('reset');
      });
      return false;

   });
   //-------------------------------scroll pageUp------------------------

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
         $('.page-up').fadeIn();
      } else {
         $('.page-up').fadeOut();
      }
   });

   $("a[href='#up']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });

});
const swiper = new Swiper('.swiper', {
    // OPTIONAL PARAMETERS
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true, // opt. chsnge size according to active slide
      clickable: true, // opt. to make the bullets clicable

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    draggable:true   // opt. to drag slides by scroll
    },

// ПЕРЕТАСКИВАНИЕ НА ПК
    // включение отключение
    // перетаскиваиня на ПК
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    //  угол сраабатівания
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,
//  переключение по клику на слайд
    slideToClickedSlide: true,

//  УПРАВЛЕНИЕ КЛАВИТАУТРОРЙ
keyboard: {
    enabled: true,
    pageUpDown: true,
    onlyInViewport: true,
  },

//   УПРАВЛЕНИЕ КОЛЕСОМ МЫШИ
mousewheel:{
    sensitivity:1,
    
},

// АВТОВЫСОТА
autoHeight: true,

// ОТОБРАЖЕНИЕ КОЛИЧЕСТВА СЛАЙДОВ 
// по умолчаниею 1 
//  можна указвівть дробные значения
slidesPerView: 1,

//  ОТКЛЮЧИТЬ СВАЙПЕР ЕСЛИ В НЕМ ТОЛЬКО СЛАЙД АВТОМАТИЧЕСКИ
watchOverflow: true,

// ОТСТУПЫ МЕЖДУ СЛАЙТДАМИ
spaceBetween: 10,

//  ВЫВОД ГРУППИ СЛАЙНДО
//  по умолчению 1
slidesPerGroup: 1,

// BREAKPOINTS

breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
       // when window width is >= 640px
       1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
  }
  });




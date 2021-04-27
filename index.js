    
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView:4,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768:{
        slidesPerView:4
      }

    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
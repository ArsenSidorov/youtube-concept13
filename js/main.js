const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
slidesPerView: 1,
spaceBetween: 20,
breakpoints: {
  1900: {
    slidesPerView: 6
  },
  1500: {
    slidesPerView: 5
  },
  1300: {
    slidesPerView: 4
  },
  1100: {
    slidesPerView: 3
  },
  760: {
    slidesPerView: 2
  },
  480: {
    slidesPerView: 1
  }
},
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});
const swiper1 = new Swiper('.channel-slider-recommended', {
  // Optional parameters
  loop: true,
slidesPerView: 1,
spaceBetween: 20,
breakpoints: {
  1900: {
    slidesPerView: 3
  },
  1200: {
    slidesPerView: 2
  },
  760: {
    slidesPerView: 1
  },
},
  navigation: {
    nextEl: '.channel-button-rec-next',
    prevEl: '.channel-button-rec-prev',
  },

});

const swiper2 = new Swiper('.channel-fd-slider', {
  // Optional parameters
  loop: true,
slidesPerView: 1,
spaceBetween: 20,
breakpoints: {
  1900: {
    slidesPerView: 6
  },
  1500: {
    slidesPerView: 5
  },
  1300: {
    slidesPerView: 4
  },
  1100: {
    slidesPerView: 3
  },
  760: {
    slidesPerView: 2
  },
  480: {
    slidesPerView: 1
  }
},
  navigation: {
    nextEl: '.channel-button-fd-next',
    prevEl: '.channel-button-fd-prev',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <=640) {
  swiper.destroy();
  swiper1.destroy();
  swiper2.destroy();
};
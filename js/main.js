const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
slidesPerView: 6,
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});
const swiper1 = new Swiper('.channel-slider-recommended', {
  // Optional parameters
  loop: true,
slidesPerView: 3,
  navigation: {
    nextEl: '.channel-button-rec-next',
    prevEl: '.channel-button-rec-prev',
  },

});

const swiper2 = new Swiper('.channel-fd-slider', {
  // Optional parameters
  loop: true,
slidesPerView: 6,
  navigation: {
    nextEl: '.channel-button-fd-next',
    prevEl: '.channel-button-fd-prev',
  },

});
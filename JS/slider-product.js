const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    560: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  navigation: {
    nextEl: ".button-prev",
    prevEl: ".button-next",
  },
});

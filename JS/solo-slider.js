const swiperSolo = new Swiper(".mySoloSwiper", {
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 3000, // Интервал в миллисекундах
    disableOnInteraction: false, // Автоплей не останавливается при взаимодействии
  },
  pagination: {
    el: ".swiper-pagin",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    freeMode: true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper1 = new Swiper1(".mySwiper", {
    navigation: {
      nextEl: ".swiper1-button-next",
      prevEl: ".swiper1-button-prev",
    },
  });
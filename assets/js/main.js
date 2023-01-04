const mobBtn = document.querySelector('.mobile-navigation__burger');

mobBtn.addEventListener('click', function () {
   let mobMenu =  document.querySelector('.mobile-menu');

   mobBtn.classList.toggle('active');
   mobMenu.classList.toggle('not-visible');
});



new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    autoHeight: true,
    autoWidth: true,
    loop: true,

    navigation: {
        nextEl: '.nav-right',
        prevEl: '.nav-left'
    }
});

new Swiper('.swiper-reviews', {
    speed: 400,
    spaceBetween: 0,
    autoHeight: true,
    autoWidth: true,
    // loop: true,
    slidesPerView: 3,
    loopedSlides: 1,
    slidesPerColumn: 3,

    navigation: {
        nextEl: '.nav-right__rev',
        prevEl: '.nav-left__rev'
    }
});

new Swiper('.webinar-cards-swiper', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: "auto",
});

new Swiper('.swiper__reviews-cards', {
    autoHeight: true,
    autoWidth: true,
    slidesPerView: "auto",
    spaceBetween: 52,
})
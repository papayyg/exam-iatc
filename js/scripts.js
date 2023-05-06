const swiperHeader = new Swiper(".headerSwiper", {
    allowTouchMove: false,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperReviews = new Swiper(".reviewsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const blocks = document.querySelectorAll(".ideas__item");

blocks.forEach(function (block) {
    block.addEventListener("click", function () {
        let content = block.querySelector(".ideas__content");
        content.classList.toggle("show");
    });
});

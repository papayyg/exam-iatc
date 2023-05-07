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
    slidesPerView: 2,
    breakpoints: {
        // когда ширина экрана меньше 1200 пикселей
        1200: {
            slidesPerView: 3, // показывать 2 слайда
        },
    },
});

const blocks = document.querySelectorAll(".ideas__item");

blocks.forEach(function (block) {
    block.addEventListener("click", function () {
        let content = block.querySelector(".ideas__content");
        content.classList.toggle("show");
    });
});

const navbarButton = document.querySelector(".navbar__button");
const navbarCloseButton = document.querySelector(".button");
const asideMenu = document.querySelector("aside");

navbarCloseButton.addEventListener("click", function () {
    asideMenu.classList.toggle("active");
});

navbarButton.addEventListener("click", function () {
    asideMenu.classList.toggle("active");
});

const dropMenuButton = document.querySelector("#submenu");
const subMenu = document.querySelector(".submenu");

dropMenuButton.addEventListener("click", function () {
    subMenu.classList.toggle("active");
});

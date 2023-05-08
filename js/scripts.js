if (window.innerWidth < 576) {
    const elements = document.querySelectorAll(".reviewsSwiper, .reviews__block, .reviewsWrapper");
    const reviewsWrapperDel = document.querySelector(".reviewsWrapper");
    reviewsWrapperDel.querySelectorAll(":nth-child(4), :nth-child(5)").forEach((el) => el.remove());
    elements.forEach((el) => el.classList.remove("swiper", "swiper-wrapper", "swiper-slide"));
}

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
    slidesPerView: 1,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        }
    },
});

const blocks = document.querySelectorAll(".ideas__item");

blocks.forEach(function (block) {
    block.addEventListener("click", function () {
        let content = block.querySelector(".ideas__content");
        content.classList.toggle("show");
    });
});



const asideMenu = document.querySelector("aside");

const navbarCloseButton = document.querySelector(".button");

navbarCloseButton.addEventListener("click", function () {
    asideMenu.classList.toggle("active");
});

const navbarButton = document.querySelector(".navbar__button");

navbarButton.addEventListener("click", function () {
    asideMenu.classList.toggle("active");
});

const dropMenuButton = document.querySelector("#submenu");
const subMenu = document.querySelector(".submenu");

dropMenuButton.addEventListener("click", function () {
    subMenu.classList.toggle("active");
});

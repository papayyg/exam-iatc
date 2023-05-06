const swiper = new Swiper(".swiper", {
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

// const blocks = document.querySelectorAll(".ideas__item");

// blocks.forEach(function (block) {
//     block.addEventListener("click", function () {
//         let content = block.querySelector(".ideas__content");
//         let contentStyle = window.getComputedStyle(content);
//         if (contentStyle.display === "none") {
//             content.style.display = "block";
//         } else {
//             content.style.display = "none";
//         }
//     });
// });

const blocks = document.querySelectorAll(".ideas__item");

blocks.forEach(function (block) {
    block.addEventListener("click", function () {
        let content = block.querySelector(".ideas__content");
        content.classList.toggle("show");
    });
});

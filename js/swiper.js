/* main_visual */
var mvSwiper = new Swiper(".mv-swiper", {
    navigation: {
        nextEl: ".mv-swiper-button-next",
        prevEl: ".mv-swiper-button-prev",
    },
    pagination: {
        el: ".main_visual .mv-swiper-pagination",
    },
});

/* section04 */
var s4swiper = new Swiper(".s4-swiper", {
    autoplay: {
        delay: 3000,
    },
    loop: true,
    pagination: {
        el: ".s4-swiper-pagination",
        type: "fraction",
    },
});

/* section01 */
var s1swiper = new Swiper(".s1-swiper", {
    pagination: {
        el: ".s1-swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".mv-swiper-button-next",
        prevEl: ".mv-swiper-button-prev",
    },
});
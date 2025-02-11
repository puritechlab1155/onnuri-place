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

/* section01 (예약 페이지)*/
var s1swiper = new Swiper(".s1-swiper", {
    navigation: {
        nextEl: ".swiper01-next",
        prevEl: ".swiper01-pre",
    },
});

var s2swiper = new Swiper(".s2-swiper", {
    navigation: {
        nextEl: ".swiper02-next",
        prevEl: ".swiper02-pre",
    },
});

var s3swiper = new Swiper(".s3-swiper", {
    navigation: {
        nextEl: ".swiper03-next",
        prevEl: ".swiper03-pre",
    },
});

var g1swiper = new Swiper(".g1-swiper", {
    navigation: {
        nextEl: ".swiper01-next",
        prevEl: ".swiper01-pre",
    },
});

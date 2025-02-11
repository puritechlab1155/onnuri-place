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

/* section01 */
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

var tb1swiper = new Swiper(".tb1-swiper", {
    allowTouchMove: false,
});

var tb2swiper = new Swiper(".tb2-swiper", {
    allowTouchMove: true,
    loop:false,
    freeMode: true,
    resistanceRatio: 0.85,
    slidesPerView: 'auto',
});

var tb3swiper = new Swiper(".tb3-swiper", {
    allowTouchMove: true,
    loop:false,
    freeMode: true,
    resistanceRatio: 0.85,
    slidesPerView: 'auto',
});

var tb4swiper = new Swiper(".tb4-swiper", {
    allowTouchMove: true,
    loop:false,
    freeMode: true,
    resistanceRatio: 0.85,
    slidesPerView: 'auto',
});

// /* section04 */
// var s4swiper = new Swiper(".s4-swiper", {
//     autoplay: {
//         delay: 3000,
//     },
//     loop: true,
//     pagination: {
//         el: ".s4-swiper-pagination",
//         type: "fraction",
//     },
// });

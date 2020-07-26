const slider = document.querySelector(".swiper-container");
let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  pagination: {
    el: ".pag-1",
    type: "bullets",
    clickable: true,
  },
});

let open = document.querySelector(".open"),
  close = document.querySelector(".close"),
  innerBox = document.querySelector(".inner-box");
open.addEventListener("click", function () {
  innerBox.classList.add("inner-box_active");
});
close.addEventListener("click", function () {
  innerBox.classList.remove("inner-box_active");
});

let open2 = document.querySelector(".open2"),
  close2 = document.querySelector(".close2"),
  innerBox2 = document.querySelector(".inner-box2");
open2.addEventListener("click", function () {
  innerBox2.classList.add("inner-box2_active");
});
close2.addEventListener("click", function () {
  innerBox2.classList.remove("inner-box2_active");
});

let open3 = document.querySelector(".open3"),
  close3 = document.querySelector(".close3"),
  innerBox3 = document.querySelector(".inner-box3");
open3.addEventListener("click", function () {
  innerBox3.classList.add("inner-box3_active");
});
close3.addEventListener("click", function () {
  innerBox3.classList.remove("inner-box3_active");
});

let open4 = document.querySelector(".open4"),
  close4 = document.querySelector(".close4"),
  innerBox4 = document.querySelector(".inner-box4");
open4.addEventListener("click", function () {
  innerBox4.classList.add("inner-box4_active");
});
close4.addEventListener("click", function () {
  innerBox4.classList.remove("inner-box4_active");
});

let open5 = document.querySelector(".open5"),
  close5 = document.querySelector(".close5"),
  innerBox5 = document.querySelector(".inner-box5");
open5.addEventListener("click", function () {
  innerBox5.classList.add("inner-box5_active");
});
close5.addEventListener("click", function () {
  innerBox5.classList.remove("inner-box5_active");
});

let open6 = document.querySelector(".open6"),
  close6 = document.querySelector(".close6"),
  innerBox6 = document.querySelector(".inner-box6");
open6.addEventListener("click", function () {
  innerBox6.classList.add("inner-box6_active");
});
close6.addEventListener("click", function () {
  innerBox6.classList.remove("inner-box6_active");
});
const slider2 = document.querySelector(".swiper-container2");
let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 1,
  pagination: {
    el: ".pag-2",
    type: "bullets",
    clickable: true,
  },
});
const slider3 = document.querySelector(".swiper-container3");
let mySwiper3 = new Swiper(slider3, {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

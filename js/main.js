$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });
});

const hamberger = document.querySelector(".hamberger");
const times = document.querySelector(".times");
const navBar = document.querySelector(".mobile-nav");
hamberger.addEventListener("click", () => {
  navBar.classList.add("open");
});
times.addEventListener("click", () => {
  navBar.classList.remove("open");
});

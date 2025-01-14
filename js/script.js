// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Slider Upcoming Events
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  // Pagination Bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    lockclass: "swiper-button-lock",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    520: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 3,
    },
  },
});

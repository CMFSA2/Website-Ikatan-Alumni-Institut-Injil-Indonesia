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

const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const updateIndicator = (tab, index) => {
  sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
};

// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: { delay: 4000 },
  on: {
    //Update The Indicator On Slide Change
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(
        sliderTabs[swiper.activeIndex]
      );
      updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
    },
  },
});

// Update The Slide and Indicator On Tab Click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updateIndicator(tab, index);
  });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () =>
  updateIndicator(sliderTabs[swiper.activeIndex], 0)
);

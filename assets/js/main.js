/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

// Show Video

var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 6,
    },
  },
});

var swiper = new Swiper(".swiperBrands", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1300: {
      slidesPerView: 6,
    },
  },
});
var swiper = new Swiper(".swiperPrices", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    enabled: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      enabled: true,
      delay: 1000,
    },
    350: {
      slidesPerView: 1,
      enabled: true,
      delay: 1000,
    },
    520: {
      slidesPerView: 1,
      enabled: true,
      delay: 1000,
    },
    768: {
      slidesPerView: 1,
      enabled: true,
      delay: 1000,
    },
    1000: {
      slidesPerView: 2,
      autoplay: false,
    },
    1200: {
      slidesPerView: 4,
      autoplay: false,
    },
    1300: {
      slidesPerView: 4,
      autoplay: false,
    },
  },
});

var swiper = new Swiper(".swiper1", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 6,
  spaceBetween: 30,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-navBtn",
    prevEl: ".swiper-navBtn",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});

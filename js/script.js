// Current Year
copyright = document.querySelector('.footer__copyright');
year = new Date().getFullYear();
copyright.innerText = '© ' + year + ' Evercon';

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 40,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 180,
        loopedSlides: 3,
      },
    }
});

// Scroll Animation
sal();

const revenue = document.querySelector('.revenue__multiplier');

revenue.addEventListener('sal:in', () => {
  revenue.classList.add('counter');
});


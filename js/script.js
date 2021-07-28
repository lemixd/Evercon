// Current Year
copyright = document.querySelector('.footer__copyright');
year = new Date().getFullYear();
copyright.innerText = '© ' + year + ' Evercon';

// Swiper Slider
var playerSwiper = new Swiper(".player-slide", {
    loop: true,
    spaceBetween: 40,
    grabCursor: true,
    speed: 600,
    parallax: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        speed: 2000,
        spaceBetween: 180,
        loopedSlides: 3,
      },
    }
});

var galleySwiperThumb = new Swiper(".gallery__thumb", {
    spaceBetween: 8,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        slidesPerView: 12,
      },
      768: {
        slidesPerView: 8,
      },
    }
});
var galleySwiperPic = new Swiper(".gallery__container", {
    spaceBetween: 8,
    grabCursor: true,
    speed:  600,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleySwiperThumb,
    },
});

// Scroll Animation
sal();

const revenue = document.querySelector('.revenue__multiplier');

revenue.addEventListener('sal:in', () => {
  revenue.classList.add('counter');
});


// Ribbon lines fill on scroll
let lines = document.querySelectorAll('.line');
let l = dasharray = dashoffset = lines[0].getTotalLength();
const a = business.getBoundingClientRect().top;

document.body.addEventListener("scroll", function() {
  dashoffset = l - this.scrollTop * l / (this.scrollHeight - this.clientHeight) * 3.5;
  // dashoffset = l - this.scrollTop * l / (this.scrollHeight - this.clientHeight) * 3.5 + a;
  // dashoffset = l - a - this.scrollTop;

  
  for(i=0;i<lines.length;i++) {
    lines[i].setAttributeNS(null, "stroke-dasharray", l);
    lines[i].setAttributeNS(null, "stroke-dashoffset", dashoffset);
  }
  // console.log(dashoffset);
});
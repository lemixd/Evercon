// Current Year
copyright = document.querySelector('.footer__copyright');
year = new Date().getFullYear();
copyright.innerText = '© ' + year + ' Evercon';


// Players Slider Template
const players = document.getElementById('player-info');
const playerInfo = [
  { name: 'Sergey Bogoslovskiy',
    position: 'CEO, Evercon',
    photo: 'assets/players/player-1.png',
    description: [
      'Founded the social discovery web product, which got to the TOP 10 companies by revenue in the niche in six month and TOP 15 startups in Ukraine by investment volume',
      'Ex-Startup mentor at Google',
      'Launched mobile app with $1+ mln monthly revenue after a year',
      'Built retention department from scratch for the product with 30+ mln users'
    ]},
  { name: 'Nadia Smirnova',
    position: 'CMO, Evercon',
    photo: 'assets/players/player-2.png',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Fusce a scelerisque ligula. Vivamus sed lacus in mi auctor auctor ac vitae lacus',
      'Ut ultrices, lacus at sollicitudin consectetur, dolor leo porttitor neque, ac maximus ligula nunc in massa. Morbi in ultrices turpis',
      'Vestibulum egestas libero sed augue ornare lacinia'
    ]},
  { name: 'Dmitriy Pavlenko',
    position: 'Head of B2B, Evercon',
    photo: 'assets/players/player-3.png',
    description: [
      '10 years of experience in business development, MBA education',
      'Unfolded market research operational business to 92 countries and 500+ employees in 3 years',
      '400 Customer Experience projects in different niches',
      'Successfuly accounted contracts with Fortune-listed International clients – Google, Tesla, Mastercard, Rakuten, Samsung, Uber etc.'
   ]}
];

playerInfo.forEach((player, index) => {
  const instance = document.importNode(players.content, true);

  instance.querySelector('.player__name').innerText = player.name;
  instance.querySelector('.player__position').innerText = player.position;
  instance.querySelector('.player__photo').setAttribute('src', player.photo);
  
  const list = player.description.reduce((fragment, innerText) => {
    fragment.appendChild(Object.assign(document.createElement('li'), { innerText, className: 'player-stats__item' }));
    return fragment;
  }, instance.querySelector('.player-stats'));
 
  document.querySelector('.player-slides').appendChild(instance);
});

// Players Slider Config
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
let lineLength = lines[0].getTotalLength();
const lineOffsetTop = business.getBoundingClientRect().top;
const velocity = 5.5;
const prerender = window.innerHeight / 2;

lines.forEach((line) => {
  line.setAttributeNS(null, "stroke-dasharray", lineLength);
})

document.body.addEventListener("scroll", function() {
  const dashoffset =  Math.max(
    lineLength - (Math.max(this.scrollTop - lineOffsetTop + prerender, 0)  ) * lineLength / (this.scrollHeight - this.clientHeight) * velocity,
    0
  );

  lines.forEach((line) => {
    line.setAttributeNS(null, "stroke-dashoffset", dashoffset);
  })
});
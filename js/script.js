// Players Slider Template
const players = document.getElementById('player-info');
const playerInfo = [
  { name: 'Sergey Bogoslovskiy',
    position: 'CEO, Evercon',
    photo: 'assets/players/Bogoslovskiy.png',
    description: [
      'Founded the social discovery web product, which got to the TOP 10 companies by revenue in the niche in six month and TOP 3 startups in Ukraine by investment volume',
      'Ex-Startup mentor at Google',
      'Launched mobile app with $1+ mln monthly revenue after a year',
      'Built retention department from scratch for the product with 30+ mln users'
    ]},
  { name: 'Nadia Smirnova',
    position: 'CMO, Evercon',
    photo: 'assets/players/Smirnova.png',
    description: [
      '8 years of business experience with education background in economic cybernetics and finance',
      'Complex models development and margin strategies for the largest Eastern European holding with 4B yearly turnover',
      'Built full cycle analytics and strategies for vertically integrated companies with 3B net value ',
      'Lead Civitta projects in enternprises Due diligence: All seeds, Kernel, Digit'
    ]},
  { name: 'Dmitriy Pavlenko',
    position: 'COO, Evercon',
    photo: 'assets/players/Pavlenko.png',
    description: [
      '10 years of experience in business development, MBA education',
      'Unfolded market research operational business to 92 countries and 500+ employees in 3 years',
      '400 Customer Experience projects in different niches',
      'Successfuly accounted contracts with Fortune-listed International clients – Google, Tesla, Mastercard, Rakuten, Samsung, Uber etc.'
   ]}
];

playerInfo.forEach(player => {
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


// Jobs template
const jobsList = document.getElementById('jobs-list');
const footerList = document.getElementById('footer-list');
const jobs = [
  { position: 'Marketing Manager',
    description: 'Develop strategies of investing mln. of dollars in paid acquisition',
    link: 'https://t.me/mxplp'
  },
  { position: 'Junior Analyst',
  description: 'Artificial Intelligence, Big Data sets and forecasting for business acceleration',
  link: 'https://t.me/mxplp'
  },
  { position: 'Product Manager',
  description: 'Create cool features that change the World and make customers fall in love',
  link: 'https://t.me/mxplp'
  },
  { position: 'Support Team Lead',
  description: 'Empathise our Customers with smooth service and fast solutions',
  link: 'https://t.me/mxplp'
  },
];

jobs.forEach(job => {
  const jobsInstance = document.importNode(jobsList.content, true);

  jobsInstance.querySelector('.jobs-list__heading').innerText = job.position;
  jobsInstance.querySelector('.jobs-list__description').innerText = job.description;
  jobsInstance.querySelector('.jobs-list__button').setAttribute('href', job.link);

  document.querySelector('.jobs__list').appendChild(jobsInstance);

  const footerLink = document.importNode(footerList.content, true);
  footerLink.querySelector('.footer-list__link').innerText = job.position;
  footerLink.querySelector('.footer-list__link').setAttribute('href', job.link);

  document.querySelector('.footer-list').appendChild(footerLink);
});


// Gallery
const galleryTemplate = document.getElementById('gallery-photos');
const countPhotos = 9 +1;

for(let i=1; i<countPhotos; i++) {
  const galleryPhoto = document.importNode(galleryTemplate.content, true);
  galleryPhoto.querySelector('.gallery__photo').setAttribute('src', 'assets/gallery/' + [i] + '.jpg');
  document.querySelector('.gallery__container .swiper-wrapper').appendChild(galleryPhoto);
}

for(let i=1; i<countPhotos; i++) {
  const galleryThumb = document.importNode(galleryTemplate.content, true);
  galleryThumb.querySelector('.gallery__photo').setAttribute('src', 'assets/gallery/' + [i] + '.jpg');
  document.querySelector('.gallery__thumb .swiper-wrapper').appendChild(galleryThumb);
}

var gallerySwiperThumb = new Swiper(".gallery__thumb", {
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
      swiper: gallerySwiperThumb,
    },
});

// Scroll Animation
sal();

const revenue = document.querySelector('.revenue__multiplier');

function multiplier() {
  let i = 50;
  const timer = setInterval(() => {
      if (i === 100) { clearInterval(timer); }
      revenue.innerText = i++ +'x';
  }, 25);
}

revenue.addEventListener('sal:in', () => {
  // revenue.classList.add('counter');
  multiplier();
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

// Current Year
copyright = document.querySelector('.footer__copyright');
year = new Date().getFullYear();
copyright.innerText = '© ' + year + ' Evercon';
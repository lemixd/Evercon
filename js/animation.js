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


// Animation on scroll
gsap.registerPlugin(ScrollTrigger);

const animDur = 0.5;
const animTranslateX = 100;
const animTranslateY = 40;
const animStart = "top 80%";

// Business section
const spotlightsOdd = gsap.utils.toArray('.business-spotlight');
spotlightsOdd.forEach((spotlight, index) => {
  gsap.fromTo(spotlight, {
    x: (index % 2) ? animTranslateX : -animTranslateX,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: animDur,
    scrollTrigger: {
      trigger: spotlight,
      start: animStart,
    }
  });
});


const slideUp = {
    "anim-slide-up": {y: 0, opacity: 1, duration: animDur}
  };

for (let p in slideUp) {
gsap.utils.toArray("." + p).forEach(el => {
gsap.fromTo(el, {
    y: animTranslateY,
    opacity: 0,
    }, {
    ...slideUp[p],
    scrollTrigger: {
        trigger: el,
        start: animStart,
    }
    });
});
}


// Revenue Counter
function multiplier() {
    const revenue = document.querySelector('.revenue__multiplier');
    let i = 50;
    const timer = setInterval(() => {
        if (i === 100) { clearInterval(timer); }
        revenue.innerText = i++ +'x';
    }, 25);
}

ScrollTrigger.create({
    trigger: '.revenue__multiplier',
    onEnter: () => multiplier(),
    once: true,
});


// Rocket anim
const rocket = document.querySelector('.revenue__rocket');
lottie.setQuality('low');

lottie.loadAnimation({
container: rocket,
renderer: 'canvas',
loop: true,
autoplay: true,
path: 'assets/rocket.json'
});

gsap.fromTo(rocket, {
  xPercent: -30,
  yPercent: 30,
  rotation: 10,
  }, {
  xPercent: 20,
  yPercent: -40,
  rotation: -15,
  ease: "sine.out",
  scrollTrigger: {
    trigger: '.revenue__chart-wrapper',
    start: 'top 60%',
    scrub: 0.6,
    once: true,
  }
});


// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.revenue__chart-wrapper',
//     start: 'top 60%',
//     scrub: 0.6,
//     once: true,
//     markers: true,
//   }
// })
// // .fromTo(rocket, {x: -100, y: 0, rotation: 10}, {x:50, y: -50, rotation: -10, ease: "slow(0.7, 0.7, false)"})
// // .to(rocket, {x:120, y: -150, rotation: -30})
// // .to(rocket, {y: -300, rotate: -55,})

// .fromTo(rocket, {xPercent: -30, yPercent: 30, rotation: 10}, {xPercent: 20, yPercent: -40, rotation: -10})
// .to(rocket, {xPercent: 0, yPercent: 0, rotation: 0,})
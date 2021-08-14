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
const animStart = "top 75%";

// Business section
const spotlightsOdd = gsap.utils.toArray('.business-spotlight:nth-of-type(odd)');
spotlightsOdd.forEach(spotlight => {
  gsap.fromTo(spotlight, {
    x: -animTranslateX,
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

const spotlightsEven = gsap.utils.toArray('.business-spotlight:nth-of-type(even)');
spotlightsEven.forEach(spotlight => {
  gsap.fromTo(spotlight, {
    x: animTranslateX,
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

gsap.utils.toArray('.players__wrapper, .cta, .revenue__heading, .revenue__multiplier, .jobs__heading, .jobs-list__item, .jobs__quote').forEach(el => {
  gsap.fromTo(el, {
    y: animTranslateY,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: animDur,
    scrollTrigger: {
      trigger: el,
      start: animStart,
    }
  });
});


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
});
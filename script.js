var tl = gsap.timeline();

tl.to("#nav", {
  scrollTrigger: {
    trigger: "#nav",
    pin: true,
    pinSpacing: false,
    scrub: 0.5,
  },
  backgroundColor: "black",
  opacity: 1,
  duration: 0.3,
  y: -70,
});
gsap.to("#main", {
  x: "-100vw",
  duration: 2,
  ease: "linear",
  repeat: -1,
  repeatDelay: 1,
  yoyo: false,
  delay: 1,
});
gsap.to("#page1-indicator", {
  color: "transparent",
  duration: 1,
  repeat: -1,
  yoyo: true,
});
gsap.to("#page2-indicator", {
  color: "white",
  duration: 1,
  repeat: -1,
  yoyo: true,
});
gsap.from(".box2 img", {
  scrollTrigger: {
    trigger: ".box2 img",
    scrub: true,
    markers: false,
  },
  scale: 1.5,
  yPercent: -20,
  ease: "none",
  duration: 1,
});
gsap.from(
  ".box-center h5,.box-center h1,.box-center h4,.star i,.box-center h6",
  {
    y: 50,
    // opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".box-center",
      scrub: true,
      markers: false,
    },
  }
);
gsap.from(".centered h1,.centered h3", {
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".centered h1,.centered h3",
    scrub: true,
    markers: false,
  },
});
gsap.from(".centered5 h6,.centered5 h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".centered5",
    scrub: true,
    markers: false,
  },
});
gsap.from(".box-1 h6,.box-1 h2", {
  y: 30,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".box-1",
    scrub: true,
    markers: false,
  },
});
gsap.from(".centered8 h6,.centered8 h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".centered8",
    scrub: true,
    markers: false,
  },
});
gsap.to("#page9", {
  scrollTrigger: {
    trigger: "#page9",
    scrub: true,
    markers: false,
  },
  scale: 1.5,
  yPercent: -20,
  ease: "none",
  duration: 1,
});
gsap.from(".centered10 h6,.centered10 h1", {
  y: 30,
  // opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".centered10",
    scrub: true,
    markers: false,
  },
});
gsap.from(".element-1 h4, .element-1 h5, .element-1 img, .element-1 i", {
  y: 200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".inner",
    scroller: "body",
    markers: false,
  },
});
const cards = document.querySelectorAll(".Card");
cards.forEach((card) => {
  const decreaseBtn = card.querySelector(".left-circle");
  const increaseBtn = card.querySelector(".right-circle");
  const valueDisplay = card.querySelector(".value");

  let currentValue = parseInt(valueDisplay.textContent);

  function updateValue(newValue) {
    if (newValue >= 0 && newValue <= 10) {
      currentValue = newValue;
      valueDisplay.textContent = currentValue;
    }
  }
  decreaseBtn.addEventListener("click", () => {
    if (currentValue > 0) {
      updateValue(currentValue - 1);
    }
  });
  increaseBtn.addEventListener("click", () => {
    if (currentValue < 10) {
      updateValue(currentValue + 1);
    }
  });
});

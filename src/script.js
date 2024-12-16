var tl = gsap.timeline();
tl.timeScale(1.3);
tl.from(".hero-image", {
  y: 100,

  duration: 0.5,
  opacity: 0,
});

tl.from(".hero-head", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "elastic",
});
tl.from(".hero-title", {
  x: "-50px",
  opacity: 0,
});
tl.from(".hero-text", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.to(".bt", {
  x: "100%",
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
});

tl.from(".bel", {
  y: "-100%",
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".exp-title", {
  x: "-200px",
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".exp-title",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from(".exp-1", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".exp-2", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".exp-3", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-3",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from(".exp-4", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-4",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".exp-5", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-5",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".exp-6", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-6",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".exp-7", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-7",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".exp-8", {
  x: "200px",
  opacity: 0,

  scrollTrigger: {
    trigger: ".exp-8",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

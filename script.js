let menu = document.querySelector("#menu");
let closeMenu = document.querySelector("#cross");
let navBar = document.querySelector("nav");
let navAnchor = document.querySelectorAll("nav a");
let timeLine = gsap.timeline();

function headerAnim() {
  timeLine.from(".logoName", {
    y: -30,
    duration: 0.6,
    opacity: 0,
    delay: 0.8,
  });
  timeLine.from("nav a:not(#button)", {
    y: -40,
    duration: 0.6,
    opacity: 0,
    stagger: 0.25,
  });
  timeLine.to("header nav #button", {
    y: 0,
    duration: 0.8,
    opacity: 1,
    ease: "none",
  });
}
function headerAnim2() {
  timeLine.from(".logoName", {
    y: -30,
    duration: 0.6,
    opacity: 0,
    delay: 0.8,
  });
  timeLine.from(".menu-icon", {
    y: -40,
    duration: 0.8,
    opacity: 0,
  });

  let tl = gsap.timeline();
  tl.to(navBar, {
    x: "-100%",
    duration: 0.4,
  });
  tl.from("nav a:not(#button)", {
    x: 100,
    duration: 0.4,
    opacity: 0,
    stagger: 0.25,
  });
  tl.to("header nav #button", {
    y: 0,
    duration: 0.4,
    opacity: 1,
    ease: "none",
  });
  tl.pause();
  menu.addEventListener("click", () => {
    tl.play();
  });
  closeMenu.addEventListener("click", () => {
    tl.reverse();
  });
  navAnchor.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      tl.reverse();
    });
  });
  window.addEventListener("scroll", () => {
    tl.reverse();
  });
}
function heroAnim() {
  timeLine.from(".content-box", {
    x: 200,
    opacity: 0,
    duration: 0.6,
  });
  timeLine.from(".content-box h1", {
    x: -200,
    opacity: 0,
    duration: 0.6,
  });
  timeLine.from(".content-img", {
    y: 200,
    opacity: 0,
    duration: 0.6,
  });
}
function brandsAnim() {
  gsap.from(".brandsLogo div", {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".brandsLogo",
      scroller: "body",
      start: "top 80%",
      end: "bottom 20%",
    },
  });
}
function resAnim() {
  if (window.innerWidth > 940) {
    headerAnim();
  } else {
    headerAnim2();
  }
}
function serviceAnim() {
  gsap.from(".services-content", {
    x: 150,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".service1",
      scroller: "body",
      start: "top 75%",
    },
  });
  gsap.from(".group1", {
    x: -150,
    duration: 0.7,
    stagger: 0.75,
    opacity: 0,
    scrollTrigger: {
      trigger: ".service-box",
      start: "top 50%",
      scroller: "body",
    },
  });
  gsap.from(".group2", {
    x: 150,
    duration: 0.7,
    stagger: 0.75,
    opacity: 0,
    scrollTrigger: {
      trigger: ".service-box",
      scroller: "body",
      start: "top 60%",
    },
  });
  gsap.from(".service2-box", {
    y: 120,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".service2",
      scroller: "body",
      start: " 40%",
    },
  });
}
function useCaseAnim() {
  gsap.from(".usecaseContent1", {
    x: -150,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".use-cases",
      scroller: "body",
    },
  });

  gsap.from(".usecaseContent2", {
    y: -100,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".use-cases",
      scroller: "body",
      start: "top 40%",
    },
  });
  gsap.from(".usecase", {
    y: 110,
    delay: 1,
    stagger: 0.8,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".usecaseContent2",
      scroller: "body",
      start: "top 70%",
    },
  });
}
resAnim();
heroAnim();
brandsAnim();
serviceAnim();
useCaseAnim();

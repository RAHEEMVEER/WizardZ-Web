function navEvents() {
  let menu = document.querySelector("#menu");
  let closeMenu = document.querySelector("#cross");
  let navBar = document.querySelector("nav");
  let navAnchor = document.querySelectorAll("nav a");

  menu.addEventListener("click", () => {
    navBar.style = "display: flex";
    window.addEventListener("scroll", () => {
      navBar.style = "display: none";
    });
    navAnchor.forEach((e) => {
      e.addEventListener("click", () => {
        navBar.style = "display: none";
      });
    });
  });
  closeMenu.addEventListener("click", () => {
    navBar.style = "display: none";
  });
}
function heroAnim() {
  let timeLine = gsap.timeline();
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
navEvents();
heroAnim();
brandsAnim();

/*
  Listen for CSS position:sticky to happen and add a class to the sticky element
  https://davidwalsh.name/detect-sticky
*/
const mh = document.querySelector("#masthead");
const observer = new IntersectionObserver(
  ([e]) => {
    e.target.classList.toggle("is-sticky", e.intersectionRatio < 1);
  },
  { threshold: [1] }
);

observer.observe(mh);

/*
  Add ".is-animating" to header.nameplate AS WELL AS
  a "shoved status" class to header.nameplate for sequencing because
  I am tinkering with the Off-Canvas Library display and animation
*/
const np = document.querySelector(".nameplate");

document
  .querySelector("#drawer-trigger")
  .addEventListener("click", function () {
    document.getElementById("spinner").removeAttribute("style");
    np.classList.add("is-animating");

    if (np.classList.contains("is-shoved")) {
      np.classList.remove("is-shoved");
      np.classList.add("is-not-shoved");
    } else {
      np.classList.add("is-shoved");
      np.classList.remove("is-not-shoved");
    }
  });

/* 
  Remove ".is-animating" from header.nameplate when Nav Transitions are complete
*/
const transition = document.querySelector("#off-canvas-top");

transition.addEventListener("transitionend", () => {
  np.classList.remove("is-animating");
});

/*
  Modded Dark Mode toggling that came for free with the 11ty Template
  https://github.com/NikitaZanella/11ty-SASS
*/
const ttg = document.querySelector("#theme-toggle");
const html = document.querySelector("html");

// Dark Mode Handler => switch theme on button click.
const darkModeHandler = () => {
  if (localStorage.getItem("darkMode") == "1") {
    html.dataset.theme = `theme-light`;
    localStorage.setItem("darkMode", "0");
  } else {
    html.dataset.theme = `theme-dark`;
    localStorage.setItem("darkMode", "1");
  }
};

// Dark Mode State Handler => check if a 'darkMode' local store exist.
// If true, activate darkMode, else create a localStorage called 'darkMode'
const darkModeState = () => {
  if (localStorage.getItem("darkMode") == "1") {
    html.dataset.theme = `theme-dark`;
  } else {
    localStorage.setItem("darkMode", "0");
    html.dataset.theme = `theme-light`;
  }
};

ttg.addEventListener("click", darkModeHandler);
window.addEventListener("load", darkModeState());

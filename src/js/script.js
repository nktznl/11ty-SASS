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
  Add a class "shoved status" class to the header.masthead for Transition Sequencing
  Because I am tinkering with the Off-Canvas Library display and animation
*/

const np = document.querySelector(".nameplate");

document
  .querySelector("#drawer-trigger")
  .addEventListener("click", function () {
    if (np.classList.contains("is-shoved")) {
      np.classList.remove("is-shoved");
      np.classList.add("is-not-shoved");
    } else {
      np.classList.add("is-shoved");
      np.classList.remove("is-not-shoved");
    }
  });

/*
  Dark mode Toggling that came for free with the 11ty Template
  https://github.com/NikitaZanella/11ty-SASS
*/
nightModeButton.addEventListener("click", darkModeHandler);
nightModeDiv.addEventListener("load", darkModeState());

const nightModeButton = document.getElementById("nightModeButton");
const nightModeDiv = document.getElementById("nightModeDiv");

// Dark Mode Handler => switch theme on button click.
const darkModeHandler = () => {
  if (localStorage.getItem("darkMode") == "1") {
    nightModeDiv.classList.remove("dark-theme");
    localStorage.setItem("darkMode", "0");
  } else {
    nightModeDiv.classList.add("dark-theme");
    localStorage.setItem("darkMode", "1");
  }
};

// Dark Mode State Handler => check if a 'darkMode' local store exist.
// If true, activate darkMode, else create a localStorage called 'darkMode'
const darkModeState = () => {
  if (localStorage.getItem("darkMode") == "1") {
    nightModeDiv.classList.add("dark-theme");
  } else {
    localStorage.setItem("darkMode", "0");
  }
};

const el = document.querySelector("#masthead");
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

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

const nightModeButton = document.getElementById("nightModeButton");
const nightModeDiv = document.getElementById("nightModeDiv");

const darkModeHandler = () => {

  if (localStorage.getItem('darkMode') == '1') {
    nightModeDiv.classList.remove("dark-theme");
    localStorage.setItem('darkMode', '0');
  } else {
    nightModeDiv.classList.add("dark-theme");
    localStorage.setItem('darkMode', '1');
  }
  
};

const darkModeState = () => {

  if (localStorage.getItem('darkMode') == '1') {
    nightModeDiv.classList.add("dark-theme");
  } else {
    localStorage.setItem('darkMode', '0');
  }
  
}

nightModeButton.addEventListener('click', darkModeHandler);
nightModeDiv.addEventListener('load', darkModeState());

// Add localStorage capabilities to keep darkMode state on page change and/or page reload.


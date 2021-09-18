const nightModeButton = document.getElementById('nightModeButton');
const nightModeDiv = document.getElementById('nightModeDiv');

const nightModeHandler = () => {

  nightModeDiv.classList.toggle('dark-theme');

}

nightModeButton.addEventListener('click', nightModeHandler)
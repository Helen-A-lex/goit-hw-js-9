function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonStartEl = document.querySelector('[data-start]');

const buttonStopEl = document.querySelector('[data-stop]');

const bodyEl = document.querySelector('body');

buttonStartEl.addEventListener('click', onBtnStartClick);
buttonStopEl.addEventListener('click', onBtnStopClick);
let id = null;

function onBtnStartClick() {
  id = setInterval(() => {
    const newColor = getRandomHexColor();
    bodyEl.style.backgroundColor = newColor;
    buttonStartEl.disabled = true;
    buttonStopEl.disabled = false;
  }, 1000);
}
function onBtnStopClick() {
  clearInterval(id);
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
}

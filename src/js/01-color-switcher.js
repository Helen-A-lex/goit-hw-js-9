function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonStartEl = document.querySelector('[data-start]');
console.log(buttonStartEl);
const buttonStopEl = document.querySelector('[data-stop]');
console.log(buttonStopEl);
const bodyEl = document.querySelector('body');
buttonStartEl.addEventListener('click', onBtnStartClick);
buttonStopEl.addEventListener('click', onBtnStopClick);
function onBtnStartClick() {
  const id = setInterval(() => {
    const newColor = getRandomHexColor();
    bodyEl.style.backgroundColor = newColor;
    buttonStartEl.setAttribute(disabled);
  }, 1000);
}
function onBtnStopClick() {
  clearInterval(id);
}

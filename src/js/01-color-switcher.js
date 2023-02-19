const btnEls = document.querySelectorAll('button');
const startBtnEl = btnEls[0];
const closeBtnEl = btnEls[1];
const NOTIFICATION_DELAY = 1000;
let changeColorInterval = null;

function handleChangeColor() {
  if (changeColorInterval) {
    return;
  }

  changeColorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, NOTIFICATION_DELAY);
}

function handleStopingChangeColor() {
  clearInterval(changeColorInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtnEl.addEventListener('click', handleChangeColor);
closeBtnEl.addEventListener('click', handleStopingChangeColor);

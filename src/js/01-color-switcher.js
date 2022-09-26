refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId = null;
const isDisabled = true;
refs.stopBtn.disabled = isDisabled;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.startBtn.disabled = isDisabled;
  refs.stopBtn.disabled = !isDisabled;
  intervalId = setInterval(changeBackgroundColor, 1000);
}
function changeBackgroundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
function onStopBtnClick() {
  refs.startBtn.disabled = !isDisabled;
  refs.stopBtn.disabled = isDisabled;
  clearInterval(intervalId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

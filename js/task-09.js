function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const inputEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
// console.log(getRandomHexColor());

btnEl.addEventListener("click", onColorChange);

function onColorChange() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  inputEl.textContent = getRandomHexColor();
}

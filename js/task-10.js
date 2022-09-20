function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestrEl = document.querySelector("button[data-destroy]");
const innerBlockEl = document.querySelector("#boxes");
let blockSize = 30;
let amount = 0;

inputEl.addEventListener(
  "input",
  (event) => (amount = Number(event.currentTarget.value))
);

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestrEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = blockSize + "px";
    box.style.width = blockSize + "px";
    box.style.margin = amount + "px";
    innerBlockEl.append(box);
    blockSize += 10;
  }
}

function destroyBoxes() {
  const elemToRemove = innerBlockEl.querySelectorAll("div");

  if (elemToRemove.length !== 0) {
    for (elem of elemToRemove) {
      elem.remove();
    }
    blockSize = 30;
  }
}

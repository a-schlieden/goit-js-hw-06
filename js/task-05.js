const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputText = event.currentTarget.value;
  if (inputText === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputText;
  }
}

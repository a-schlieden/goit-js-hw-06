const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onFocusChange);

function onFocusChange(event) {
  const inputSumbols = event.currentTarget.value;
  if (inputSumbols.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

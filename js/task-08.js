const inputEl = document.querySelector(".login-form");

inputEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (mail === "" || password === "") {
    return alert("Error");
  }
  const formData = { mail, password };
  console.log(formData);

  event.currentTarget.reset();
}

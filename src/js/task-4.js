const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();
  const result = {};

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  result.email = emailValue;
  result.password = passwordValue;
  console.log(result);
  form.reset();
});

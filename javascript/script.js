const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");
const contactName = document.querySelector("#contact-name");

function validateName() {
  let name = contactName.value;

  if (name.length == 0) {
    nameError.textContent = "Name is required.";
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.textContent = "Enter your full name."
    return false
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true
}

contactName.addEventListener("keyup", validateName);

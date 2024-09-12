const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");
const contactName = document.querySelector("#contact-name");
const contactPhone = document.querySelector("#contact-phone");
const contactEmail = document.querySelector("#contact-email");

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

function validatePhone() {
  let phone = contactPhone.value;

  if (phone.length == 0) {
    phoneError.textContent = "Phone # is required.";
    return false
  }
  if (phone.length !== 10) {
    phoneError.textContent = "Phone # should be 10 digits.";
    return false
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.textContent = "Phone # is required.";
    return false
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true
}



contactName.addEventListener("keyup", validateName);
contactPhone.addEventListener("keyup", validatePhone);
contactEmail.addEventListener("keyup", validateEmail);
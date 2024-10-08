const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");
const contactName = document.querySelector("#contact-name");
const contactPhone = document.querySelector("#contact-phone");
const contactEmail = document.querySelector("#contact-email");
const contactMessage = document.querySelector("#contact-message");
const submitBtn = document.querySelector("#submit-btn");

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

function validateEmail() {
  let email = contactEmail.value;
  
  if (email.length == 0) {
   emailError.textContent = "Email is required.";
   return false
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
   emailError.textContent = "Email invalid.";
   return false
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true
 }

 function validateMessage() {
  let message = contactMessage.value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.textContent = `${left} more characters required.`;
    return false
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true
 }

 function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.computedStyleMap.display = 'block';
    submitError.textContent = "Please fix the error/s to submit.";
    setTimeout(function(){
      submitError.style.display = 'none';
    }, 3000);
    return false
  }
 }

contactName.addEventListener("keyup", validateName);
contactPhone.addEventListener("keyup", validatePhone);
contactEmail.addEventListener("keyup", validateEmail);
contactMessage.addEventListener("keyup", validateMessage);
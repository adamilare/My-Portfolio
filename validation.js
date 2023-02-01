const email = document.getElementById('email');
const form = document.getElementById('form-contact');

function validateEmail() {
  const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const isNotValid = !emailRegExp.test(email.value);

  if (email.validity.valueMissing) email.setCustomValidity('Please enter your email');
  else if (email.value.length === 0) {
    email.setCustomValidity('Please provide your email!');
  } else if (email.validity.typeMismatch) email.setCustomValidity('You have provided an invalid email address!');
  else if (isNotValid) {
    email.setCustomValidity(
      'You have UPPERCASE in the email you typed, Please use lowercase!',
    );
  } else email.setCustomValidity('');
}

email.addEventListener('input', () => {
  validateEmail();
});

form.addEventListener('submit', () => {
  validateEmail();
});

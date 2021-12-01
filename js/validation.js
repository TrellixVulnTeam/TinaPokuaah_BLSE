'use strict';

const subscribeBtn = document.getElementById('subscribe-btn');
const email = document.getElementById('email');
const error = document.getElementById('error');
const popup = document.getElementById('popup');
const form = document.getElementById('sform');
const cancelBtn = document.getElementById('cancel');

subscribeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (checkEmail() === true) {
    form.style.display = 'none';
    popup.style.display = 'flex';
    popup.style.transform = 'translatey(-30rem)';
  }
});

cancelBtn.addEventListener('click', () => {
  form.style.display = 'block';
  popup.style.display = 'none';
});

function checkEmail() {
  const emailValue = email.value.trim();

  if (emailValue === null || emailValue === '' || !validateEmail(emailValue)) {
    error.style.display = 'block';
    emailValue.classList.add('input-success');
  } else return true;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

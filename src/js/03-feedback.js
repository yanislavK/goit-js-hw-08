import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

const STORAGE_KEYS = {
  email: 'review_email',
  messageRev: 'review_msg',
};

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onEmailInput,500));
textarea.addEventListener('input', throttle(onTextAreaInput,500));

populateTextArea();
populateEmail(); 

function onFormSubmit(evt) {
  evt.preventDefault();
    const formData = {
      email: email.value,
      message: textarea.value,
    };
    console.log(formData);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEYS.email);
    localStorage.removeItem(STORAGE_KEYS.messageRev);
}

function onEmailInput(evt) {
  const messageRev = evt.target.value;
  localStorage.setItem(STORAGE_KEYS.email, messageRev);
}

function onTextAreaInput(evt) {
  const message = evt.target.value;
    localStorage.setItem(STORAGE_KEYS.messageRev, message);
    
}

function populateEmail() {
    const savedEmail = localStorage.getItem(STORAGE_KEYS.email);
    if (savedEmail) {
        email.value=savedEmail
    }

}

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEYS.messageRev);
    if (savedMessage) { 
        textarea.value = savedMessage;
    }
    
}


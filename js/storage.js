function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

const hasLS = () => storageAvailable('localStorage');

const fullName = document.querySelector('input[name="full_name"]');
const firstName = document.querySelector('input[name="fname"]');
const lastName = document.querySelector('input[name="l_name"]');
const email = document.querySelector('input[name="email"]');
const comment = document.querySelector('textarea[name="text-area"]');

const contactObj = {};

function saveToStorage(key, value) {
  if (hasLS) {
    contactObj[key] = value;
    localStorage.setItem(key, value);
  }
}

fullName.onchange = () => {
  saveToStorage('fullName', fullName.value);
};
firstName.onchange = () => {
  saveToStorage('firstName', firstName.value);
};
lastName.onchange = () => {
  saveToStorage('lastName', lastName.value);
};
email.onchange = () => {
  saveToStorage('email', email.value);
};
comment.onchange = () => {
  saveToStorage('comment', comment.value);
};

function populateForm() {
  contactObj.fullName = localStorage.getItem('fullName');
  contactObj.firstName = localStorage.getItem('firstName');
  contactObj.lastName = localStorage.getItem('lastName');
  contactObj.email = localStorage.getItem('email');
  contactObj.comment = localStorage.getItem('comment');

  firstName.value = contactObj.firstName;
  fullName.value = contactObj.fullName;
  lastName.value = contactObj.lastName;
  email.value = contactObj.email;
  comment.value = contactObj.comment;
}

window.onload = () => {
  populateForm();
};

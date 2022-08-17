const adressEl = document.querySelector('#adress');
const phoneEl = document.querySelector('#phone');
const faxEl = document.querySelector('#fax');
const mobileEl = document.querySelector('#mobile');
const websiteEl = document.querySelector('#website');
const emailEl = document.querySelector('#email');
const contactEl = document.querySelector('#contactPerson');
const attachment = document.querySelector('#attachment');
console.log('its alive')
const form = document.querySelector('#form')

const isRequired = value => value ===''?false:true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isNumberValid = number =>{
    const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return re.test(number);
}

const checkAdress = () => {

    let valid = false;
    const adress = adressEl.value.trim();

    if (!isRequired(adress)) {
        showError(adressEl, 'Adress cannot be blank.');
    }else {
        showSuccess(adressEl);
        valid = true;
    }
    return valid;
};
const checkContact = () => {

    let valid = false;
    const contact = contactEl.value.trim();

    if (!isRequired(contact)) {
        showError(contactEl, 'You must provide a contact person');
    }else {
        showSuccess(contactEl);
        valid = true;
    }
    return valid;
};
const checkFax = () => {

    let valid = false;
    const fax = faxEl.value.trim();

    if (!isRequired(fax)) {
        showError(faxEl, 'Fax number cannot be blank.');
    }else if (!isNumberValid(fax)) {
        showError(faxEl, 'Fax number is not valid.')
    }else {
        showSuccess(faxEl);
        valid = true;
    }
    return valid;
};
const checkMobile = () => {

    let valid = false;
    const mobile = mobileEl.value.trim();

    if (!isRequired(mobile)) {
        showError(mobileEl, 'Mobile/Text number cannot be blank.');
    }else if (!isNumberValid(mobile)) {
        showError(mobileEl, 'Mobile/Text number is not valid.')
    }else {
        showSuccess(mobileEl);
        valid = true;
    }
    return valid;
};
const checkWebsite = () => {

    let valid = false;
    const website = websiteEl.value.trim();

    if (!isRequired(website)) {
        showError(websiteEl, 'Website adress cannot be blank.');
    }else {
        showSuccess(websiteEl);
        valid = true;
    }
    return valid;
};
const checkPhone = () => {

    let valid = false;
    const phone = phoneEl.value.trim();

    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone number cannot be blank.');
    }else if (!isNumberValid(phone)) {
        showError(phoneEl, 'Phone number is not valid.')
    }else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
// validate fields
let isAdressValid = checkAdress(),
isEmailValid = checkEmail(),
isPhoneValid = checkPhone(),
isFaxValid = checkFax(),
isMobileValid = checkMobile(),
isWebsiteValid = checkWebsite(),
isContanctValid = checkContact();

let isFormValid = isAdressValid &&
isEmailValid &&
isFaxValid &&
isPhoneValid &&
isWebsiteValid &&
isMobileValid &&
isContanctValid;

// submit to the server if the form is valid
if (isFormValid) {
console.log('DONE')
}
});


const debounce = (fn, delay = 500) => {
let timeoutId;
return (...args) => {
// cancel the previous timer
if (timeoutId) {
    clearTimeout(timeoutId);
}
// setup a new timer
timeoutId = setTimeout(() => {
    fn.apply(null, args)
}, delay);
};
};

form.addEventListener('input', debounce(function (e) {
switch (e.target.id) {
case 'adress':
    checkAdress();
    break;
case 'phone':
    checkPhone();
    break;
case 'mobile':
    checkMobile();
    break;
case 'website':
    checkWebsite();
    break;
case 'fax':
    checkFax();
    break;
case 'contactPerson':
    checkContact();
    break;
case 'email':
    checkEmail();
    break;
}
}));
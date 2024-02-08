const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginToggle.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginToggle.classList.add('active');
    registerToggle.classList.remove('active');
});

registerToggle.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    loginToggle.classList.remove('active');
    registerToggle.classList.add('active');
});



// login-form validate
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validateInputs();
});

const email = document.getElementById('login-email');
const password = document.getElementById('login-password');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    return emailRegex.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}


// register-form validate
const registerName = document.getElementById('register-name');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const confirmPassword = document.getElementById('confirm-password');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validateRegisterInputs();
});

const validateRegisterInputs = () => {
    const nameValue = registerName.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (nameValue === '') {
        setError(registerName, 'Name is required');
    } else {
        setSuccess(registerName);
    }

    if (emailValue === '') {
        setError(registerEmail, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(registerEmail, 'Please enter a valid email');
    } else {
        setSuccess(registerEmail);
    }

    if (passwordValue === '') {
        setError(registerPassword, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(registerPassword, 'Password must be at least 8 characters');
    } else {
        setSuccess(registerPassword);
    }

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
};






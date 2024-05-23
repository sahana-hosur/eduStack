const loginform = document.getElementById('login-form');
const user_name = document.getElementById('user_name');
const password = document.getElementById('pwd');

form.addEventListener('submit', e => {
    e.preventDefault();
    Validate();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const Validate = () => {
    const user_pattern = user_name.value.trim();
    const pass = pwd.value.trim();

    if (user_pattern === '') {
        setError(user_name, 'User name is required!');
    } else {
        setSuccess(user_name);
    }

    if (pass === '') {
        setError(pwd, 'Password is required.');
    } else {
        setSuccess(pwd);
    }

    if (user_pattern !== '' && pass !== '') {
        // Make an AJAX request to check credentials using PHP script
        $.ajax({
            url: '../php/checkCredentials.php',
            type: 'POST',
            data: { username: user_pattern, password: pass },
            success: function(response) {
                if (response === 'success') {
                    // Redirect to the next page if credentials are correct
                    window.location.href = 'dashboard.html';
                } else {
                    // Show an error message or handle incorrect credentials
                    setError(user_name, 'Incorrect username or password.');
                    setError(pwd, 'Incorrect username or password.');
                }
            },
            error: function() {
                // Handle AJAX error
                console.error('Error in AJAX request');
            }
        });
    }
};

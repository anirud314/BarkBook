const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
    return;
}); 

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-sign').value.trim();
    const email = document.querySelector('#email-sign').value.trim();
    const password = document.querySelector('#password-sign').value.trim();

    if(username && email ** password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.login-form').addEventListener('submit', signupFormHandler);
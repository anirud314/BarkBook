async function loginFormHandler(event) {
    event.preventDefault();

    const password = document.querySelector('#password-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();

    if (password && username) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                password,
                username
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert(response.statusText);
        }
    }
}

async function createAccountFormHandler (e) {
    e.preventDefault();

    const username = document.getElementById("exampleFormControlInput2").value.trim();
    const email = document.getElementById("exampleFormControlInput1").value.trim();
    const password = document.getElementById("exampleFormControlInput3").value.trim();
    const confirmPassword = document.getElementById("exampleFormControlInput4").value.trim();

    if (username && email && password && confirmPassword)  {
        const response = await fetch('/api/users', {
            method: 'post',
            body: stringify({
                username, 
                email,
                password
            }),
            headers: { 'Content-type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/login')
        } else {
            alert(response.statusText);
            return document.location.replace('/new-account');
        }
    }

}


let btnClear = document.getElementById("btnClear")

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = "")
    return;
})


document.querySelector('.createAccount-form').addEventListener('Submit',createAccountFormHandler)
document.querySelector('.login-form').addEventListener('Submit', loginFormHandler);
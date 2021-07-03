async function loginFormHandler(event) {
    event.preventDefault();

    const password = document.querySelector('#password-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();

    if (password && username) {
        console.log("username: " + username + "\n" + "password: " + password);
        const response = await fetch('/api/user/login', {
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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
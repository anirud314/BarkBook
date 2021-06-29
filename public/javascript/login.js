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
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
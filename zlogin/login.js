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
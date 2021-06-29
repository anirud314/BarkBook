async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/');
    }
    else{
        alert(response.statusText);
    }
}

// attaching the function to a logout button
document.querySelector('#logout').addEventListener('click', logout);
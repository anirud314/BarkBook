const { destroy } = require("../models/User");

async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        destroy();
    }
}

document.querySelector('#logout').addEventListener('click', logout)
const { destroy } = require("../models/User");

async function logout() {
    const response = await fetch('whatever it should be', {
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
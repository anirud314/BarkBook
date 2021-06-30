const { destroy } = require("../models/User");
let btnClear = document.getElementById("btnClear")

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = "")
    return;
})

async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#logout').addEventListener('click', logout)
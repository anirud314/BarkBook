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

let btnClear = document.getElementById("btnClear")

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = "")
    return;
})

// attaching the function to a logout button
document.querySelector('#logout').addEventListener('click', logout);
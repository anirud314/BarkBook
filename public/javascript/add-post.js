async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#posttitle').value;

console.log(title)
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#submitBtn').addEventListener('click', newFormHandler);
async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
  
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}

// attaching the function to a signup button  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
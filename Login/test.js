// script.js
const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const disname = document.getElementById('disname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    // Validate input (you can add more validation rules)
    if (username.trim() === '' || password.trim() === '' || disname.trim() === '' || email.trim() ==='') {
        alert('Please fill in all fields.');
        return;
    }

    // Perform registration logic (e.g., send data to server)
    console.log('Registered:', disname);
    console.log('registered:',username);
    console.log('registered:',email);
    console.log('registered:',password);
    alert('Registration Done');
});

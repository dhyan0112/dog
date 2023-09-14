// Function to handle form submission
function handleLogin(event) {
    event.preventDefault();

    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a data object with login credentials
    const loginData = {
        email: email,
        password: password,
    };

    // Send a POST request to the reqres.in API for login
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.token) {
                // Login successful, store the token in localStorage
                localStorage.setItem('adminToken', data.token);

                // Redirect to the Admin Dashboard page (replace with your actual URL)
                window.location.href = 'admin.html';
            } else {
                // Login failed, handle the error (e.g., show an error message)
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch((error) => {
            console.error('Error during login:', error);
            // Handle login error (e.g., show an error message)
        });
}

// Attach a submit event listener to the login form
document.getElementById('login-form').addEventListener('submit', handleLogin);

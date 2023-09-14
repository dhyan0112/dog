// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form input values
    const breedName = document.getElementById('breed-name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const place = document.getElementById('place').value;

    // Create a data object to send to the JSON server
    const formData = {
        name: breedName,
        age: parseInt(age),
        gender: gender,
        place: place,
    };

    // Send a POST request to the JSON server
    fetch('http://localhost:3000/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle successful registration (you can redirect to another page or show a success message)
            alert('Registration Successful');
            // Clear the form fields
            document.getElementById('registration-form').reset();
        })
        .catch((error) => {
            console.error('Error registering dog:', error);
            // Handle registration error (e.g., show an error message)
        });
}

// Attach a submit event listener to the registration form
document.getElementById('registration-form').addEventListener('submit', handleFormSubmit);

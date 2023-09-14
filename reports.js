// Function to calculate the average age of dogs
function calculateAverageAge(dogsData) {
    if (dogsData.length === 0) {
        return 0;
    }
    
    const totalAge = dogsData.reduce((sum, dog) => sum + dog.age, 0);
    return (totalAge / dogsData.length).toFixed(2);
}

// Function to fetch dog data and update the event report table
function fetchAndDisplayEventReport() {
    // Fetch dog data from the JSON-Server API
    fetch('http://localhost:3000/dogs')
        .then((response) => response.json())
        .then((data) => {
            // Store the dog data in a variable
            const dogsData = data;

            // Calculate the number of female and male dogs
            const femaleDogs = dogsData.filter((dog) => dog.gender === 'female').length;
            const maleDogs = dogsData.filter((dog) => dog.gender === 'male').length;

            // Calculate the average age of dogs
            const averageAge = calculateAverageAge(dogsData);

            // Update the event report table with the calculated values
            document.getElementById('total-dogs').textContent = dogsData.length;
            document.getElementById('female-dogs').textContent = femaleDogs;
            document.getElementById('male-dogs').textContent = maleDogs;
            document.getElementById('average-age').textContent = averageAge;
        })
        .catch((error) => console.error('Error fetching dog data:', error));
}

// Call the function to fetch and display the event report on page load
fetchAndDisplayEventReport();

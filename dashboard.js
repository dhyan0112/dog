// Function to fetch dog data and update the dashboard
function fetchAndDisplayDogData() {
    // Fetch dog data from the JSON-Server API
    fetch('http://localhost:3000/dogs')
        .then((response) => response.json())
        .then((data) => {
            // Store the dog data in a variable
            const dogsData = data;

            // Function to create a dog card
            function createDogCard(dog) {
                const card = document.createElement('div');
                card.classList.add('dog-card');
                card.innerHTML = `
                    <img src="dummy-image.jpg" alt="Dog Image">
                    <h3>Name: ${dog.name}</h3>
                    <p>Age: ${dog.age}</p>
                    <p>Gender: ${dog.gender}</p>
                    <p>Place: ${dog.place}</p>
                    <button class="edit-button" data-id="${dog.id}">Edit</button>
                    <button class="delete-button" data-id="${dog.id}">Delete</button>
                `;
                return card;
            }

            const dogCardsContainer = document.getElementById('dog-cards');

            // Function to display dog cards
            function displayDogCards(dogs) {
                dogCardsContainer.innerHTML = '';
                dogs.forEach((dog) => {
                    const card = createDogCard(dog);
                    dogCardsContainer.appendChild(card);
                });
            }

            // Initialize the dog cards
            displayDogCards(dogsData);

            // Filter by Gender
            const filterGenderSelect = document.getElementById('filter-gender');
            filterGenderSelect.addEventListener('change', () => {
                const selectedGender = filterGenderSelect.value;
                if (selectedGender === 'all') {
                    displayDogCards(dogsData);
                } else {
                    const filteredDogs = dogsData.filter((dog) => dog.gender === selectedGender);
                    displayDogCards(filteredDogs);
                }
            });

            // Search by Name
            const searchNameInput = document.getElementById('search-name');
            searchNameInput.addEventListener('input', () => {
                const searchQuery = searchNameInput.value.toLowerCase();
                const filteredDogs = dogsData.filter((dog) => dog.name.toLowerCase().includes(searchQuery));
                displayDogCards(filteredDogs);
            });

            // Sort by Age
            const sortAgeButton = document.getElementById('sort-age-button');
            sortAgeButton.addEventListener('click', () => {
                const sortedDogs = [...dogsData].sort((a, b) => a.age - b.age);
                displayDogCards(sortedDogs);
            });

            // Edit and Delete Buttons
            dogCardsContainer.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('edit-button')) {
                    // Handle edit button click (open modal for editing)
                    const dogId = target.getAttribute('data-id');
                    const dogToEdit = dogsData.find((dog) => dog.id === parseInt(dogId));
                    // Implement modal logic here
                } else if (target.classList.contains('delete-button')) {
                    // Handle delete button click
                    const dogId = target.getAttribute('data-id');
                    // Delete the dog entry in the JSON-Server and update the UI
                    fetch(`http://localhost:3000/dogs/${dogId}`, { method: 'DELETE' })
                        .then(() => {
                            // Remove the card from the UI
                            target.parentElement.remove();
                        })
                        .catch((error) => console.error('Error deleting dog:', error));
                }
            });
        })
        .catch((error) => console.error('Error fetching dog data:', error));
}

// Call the function to fetch and display dog data on page load
fetchAndDisplayDogData();

// Function to handle button clicks and navigate to the respective sections
function navigateToSection(sectionId) {
    const homeSection = document.getElementById('home-section');
    const adminButton = document.getElementById('admin-button');
    const userButton = document.getElementById('user-button');

    // Hide the home section
    homeSection.style.display = 'none';

    // Redirect to the chosen section
    if (sectionId === 'admin') {
        // Redirect to the admin section (you can replace 'admin.html' with your actual admin page)
        window.location.href = 'admin.html';
    } else if (sectionId === 'user') {
        // Redirect to the user section (you can replace 'user.html' with your actual user page)
        window.location.href = 'user.html';
    }
}

// Attach click event listeners to the buttons
document.getElementById('admin-button').addEventListener('click', () => {
    navigateToSection('admin');
});

document.getElementById('user-button').addEventListener('click', () => {
    navigateToSection('user');
});

// Check if the admin is logged in (you can use a token or other authentication method)
const isAdminLoggedIn = /* Check authentication status, e.g., by verifying a token */ true;

// Function to load protected pages
function loadPage(pageName) {
    const mainContent = document.querySelector('main');

    // Check if the admin is logged in
    if (!isAdminLoggedIn) {
        // Redirect to the login page if not logged in
        window.location.href = 'login.html';
        return;
    }

    // Load the requested page
    fetch(pageName)
        .then((response) => response.text())
        .then((pageContent) => {
            mainContent.innerHTML = pageContent;
        })
        .catch((error) => {
            console.error('Error loading page:', error);
            // Handle page loading error (e.g., show an error message)
        });
}

// Attach click event listeners to the navigation links
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const pageName = event.target.getAttribute('href');
        loadPage(pageName);
    }
});

// Load the default page (e.g., the login page)
loadPage('login.html');

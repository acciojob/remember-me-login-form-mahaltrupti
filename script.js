//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const submitBtn = document.getElementById('submit');
    const existingBtn = document.getElementById('existing');
    const form = document.getElementById('login-form');

    // Function to check for saved credentials on page load
    function checkSavedCredentials() {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            existingBtn.style.display = 'block'; // Show the button
        } else {
            existingBtn.style.display = 'none'; // Hide the button
        }
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            // "Remember Me" is checked, so save credentials
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // "Remember Me" is not checked, so remove any saved credentials
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        // After submission, update the button visibility
        checkSavedCredentials();
    });

    // Handle the "Login as existing user" button click
    existingBtn.addEventListener('click', () => {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    });

    // Initial check on page load
    checkSavedCredentials();
});

const openSignInButton = document.getElementById('open-sign-in');
const signInContainer = document.getElementById('sign-in-container');

openSignInButton.addEventListener('click', () => {
    signInContainer.style.display = 'block';
});

signInContainer.addEventListener('click', (event) => {
    if (event.target === signInContainer) {
        signInContainer.style.display = 'none';
    }
});
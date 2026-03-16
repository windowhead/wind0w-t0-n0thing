const container = document.querySelector('#bootstrap-image-gallery');
window.lightGallery(container, {
    selector: '.lg-item',
    plugins: [
        lgZoom,
        lgThumbnail
    ],
});

const correctPassword = "Bewerbung2026";
                const passwordInput = document.getElementById('password-input');
                const submitButton = document.getElementById('submit-password');
                const errorMessage = document.getElementById('error-message');
                const restrictedContent = document.getElementById('restricted-content');
                const passwordPrompt = document.getElementById('password-prompt');
        
                submitButton.addEventListener('click', () => {
                    if (passwordInput.value === correctPassword) {
                        passwordPrompt.style.display = 'none';
                        restrictedContent.style.display = 'block';
                    } else {
                        errorMessage.style.display = 'block';
                    }
                });
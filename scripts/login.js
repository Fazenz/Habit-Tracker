document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const messageElement = document.getElementById('response-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json(); 
            messageElement.style.display = 'block';
            messageElement.textContent = result.message;
            messageElement.style.color = result.success ? 'green' : 'red';
        } catch (error) {
            console.error('Erreur lors de la soumission:', error);
            messageElement.style.display = 'block';
            messageElement.textContent = 'Une erreur est survenue.';
            messageElement.style.color = 'red';
        }
    });
});

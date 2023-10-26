const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const backButton = document.getElementById('back-to-list');

document.getElementById('create-movie-form').addEventListener('submit', async function (event) {
    event.preventDefault();


    const formData = new FormData(this);
    const movieData = {
        name: formData.get('name'),
        synopsis: formData.get('synopsis'),
        genre: formData.get('genre'),
        duration: parseInt(formData.get('duration')),
        director: formData.get('director'),
        actors: formData.get('actors')
    };

    try {
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });

        if (response.ok) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    } catch (error) {
        console.error('Error al enviar la solicitud POST:', error);
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    }
});
backButton.addEventListener('click', function () {
    window.location.href = 'index.html';
});
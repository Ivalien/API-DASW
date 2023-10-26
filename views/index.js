async function loadMovies() {
    try {
        const response = await fetch('http://localhost:3000');
        const data = await response.json();

        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = '';

        if (data.length === 0) {
            const noRecordsMessage = document.createElement('p');
            noRecordsMessage.textContent = 'No hay registros disponibles en la base de datos.';
            movieList.appendChild(noRecordsMessage);
        } else {
            data.forEach(movie => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${movie.name}</td>
                    <td>${movie.synopsis}</td>
                    <td>${movie.genre}</td>
                    <td>${movie.duration}</td>
                    <td>${movie.director}</td>
                    <td>${movie.actors}</td>
                `;
                movieList.appendChild(row);
            });
        }
        const movieCountElement = document.getElementById('movie-count');
        movieCountElement.textContent = `Número de películas almacenadas en BD: ${data.length}`;
    } catch (error) {
        console.error('Error al cargar las películas:', error);
    }
}

window.addEventListener('load', loadMovies);
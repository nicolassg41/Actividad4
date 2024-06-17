document.addEventListener('DOMContentLoaded', function() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const apiData = document.getElementById('apiData');
            data.forEach(launch => {
                const launchElement = document.createElement('div');
                launchElement.classList.add('card', 'mb-3');
                launchElement.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${launch.name}</h5>
                        <p class="card-text">Fecha de lanzamiento: ${new Date(launch.date_utc).toLocaleDateString()}</p>
                        <p class="card-text">Lugar: ${launch.launchpad}</p>
                    </div>
                `;
                apiData.appendChild(launchElement);
            });
        })
        .catch(error => {
            const messageDiv = document.getElementById('message');
            messageDiv.innerHTML = `<div class="alert alert-danger" role="alert">Error al cargar los datos de la API: ${error.message}</div>`;
        });
});

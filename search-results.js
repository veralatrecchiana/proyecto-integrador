// Obtener el término de búsqueda desde la query string
let querys = new URLSearchParams(location.search);
let terminoBuscado = querys.get("buscar");

// Mostrar el título de búsqueda
let tituloBusqueda = document.getElementById("tituloBusqueda");
tituloBusqueda.textContent = `Resultados de búsqueda para: "${terminoBuscado}"`;

// Seleccionar el contenedor donde se mostrarán los resultados
let resultadosBusqueda = document.getElementById("resultadosBusqueda");

// Realizar la búsqueda a través de la API
fetch(`https://dummyjson.com/recipes/search?q=${terminoBuscado}`)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Mostrar resultados en consola para depuración

        // Si hay resultados, mostrarlos
        if (data.recipes.length > 0) {
            data.recipes.forEach(receta => {
                let resultadoHTML = `
                    <article class="resultado">
                        <img src="${receta.image}" alt="${receta.title}" class="imagenResultado">
                        <h2>${receta.title}</h2>
                        <a href="detalle.html?id=${receta.id}" class="verMas">Ver más</a>
                    </article>
                `;
                resultadosBusqueda.innerHTML += resultadoHTML;
            });
        } else {
            // Si no hay resultados, mostrar mensaje al usuario
            resultadosBusqueda.innerHTML = `<p class="sinResultados">No se encontraron resultados para "${terminoBuscado}".</p>`;
        }
    })
    .catch(error => {
        console.error("Error en la búsqueda:", error);
        resultadosBusqueda.innerHTML = `<p class="errorBusqueda">Hubo un problema al realizar la búsqueda. Por favor, inténtalo nuevamente más tarde.</p>`;
    });

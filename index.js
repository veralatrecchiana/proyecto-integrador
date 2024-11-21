const recetasLista = document.querySelector(".recetasLista");
const loadMoreButton = document.getElementById("load-more");

let indiceRecetas = 0; // Índice actual de recetas
const masRecetas = 10; // Cantidad de recetas a cargar por "ver mas"

function loadRecipes() {
  fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
      const allRecipes = data.recipes;

      // Obtener las próximas recetas a mostrar
      const nextRecipes = allRecipes.slice(indiceRecetas, indiceRecetas + masRecetas);

      nextRecipes.forEach(receta => {
        const markUp = `
          <article class="receta">
            <img src="${receta.image}" alt="${receta.name}" class="receta-img">
            <h2>${receta.name}</h2>
            <p><strong>Dificultad:</strong> ${receta.difficulty || "Desconocida"}</p>
            <a href="/detalle.html?id=${receta.id}" class="detalle-link">Ver detalles</a>
          </article>
        `;
        recetasLista.innerHTML += markUp;
      });

      indiceRecetas += masRecetas;

      // Desactivar el botón si no hay más recetas
      if (indiceRecetas >= allRecipes.length) {
        loadMoreButton.style.display = "none";
      }
    })
    .catch(error => {
      console.error("Error al cargar las recetas:", error);
    });
}

// Evento para cargar más recetas al hacer click
loadMoreButton.addEventListener("click", loadRecipes);

// Cargar las primeras recetas al cargar la página
loadRecipes();
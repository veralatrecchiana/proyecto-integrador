const recetasLista = document.querySelector(".recetasLista");
const loadMoreButton = document.getElementById("load-more");

let indiceRecetas = 0; // Índice actual de recetas
const masRecetas = 10; // Cantidad de recetas a cargar por "ver más"

function loadRecipes() {
  fetch('https://dummyjson.com/recipes')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const allRecipes = data.recipes;

      const nextRecipes = allRecipes.slice(indiceRecetas, indiceRecetas + masRecetas);

      let recetasMarkup = '';
      for (let i = 0; i < nextRecipes.length; i++) {
        const receta = nextRecipes[i];
        recetasMarkup += `
          <article class="receta">
            <img src="${receta.image}" alt="${receta.name}" class="receta-img">
            <h2>${receta.name}</h2>
            <p><strong>Dificultad:</strong> ${receta.difficulty || "Desconocida"}</p>
            <a href="receta.html?id=${receta.id}" class="detalle-link">Ver detalles</a>
          </article>
        `;
      }

      recetasLista.innerHTML += recetasMarkup;

      indiceRecetas += masRecetas;

      // Desactiva botón si no hay más recetas
      if (indiceRecetas >= allRecipes.length) {
        loadMoreButton.style.display = "none";
      }
    })
    .catch(function(error) {
      console.error("Error al cargar las recetas:", error);
    });
}

//Carga más recetas
loadMoreButton.addEventListener("click", loadRecipes);

// Carga primeras recetas al cargar la página
loadRecipes();
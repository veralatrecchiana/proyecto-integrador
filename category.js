let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("cat");

const category = document.querySelector(".category")
const title = document.querySelector(".title")


fetch(`https://dummyjson.com/recipes/tag/${categoria}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let categoryMarkup = ""

    for (let i = 0; i < data.recipes.length; i++) {
      let receta = data.recipes[i]
      let markUP = `
            <article class="receta">
              <img src="${receta.image}" alt="${receta.name}" class="receta-img">
              <h2>${receta.name}</h2>
              <p><strong>Dificultad:</strong> ${receta.difficulty || "Desconocida"}</p>
              <a href="/detalle.html?id=${receta.id}" class="detalle-link">Ver detalles</a>
            </article>
          `;
      categoryMarkup += markUP
    }
    category.innerHTML = categoryMarkup;
    title.innerHTML = `Categoría: ${categoria}`;
  })
  .catch(function (error) {
    console.log("Error: ", error);
  })

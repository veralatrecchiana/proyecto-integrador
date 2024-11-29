let urlParams = new URLSearchParams(window.location.search);
let buscador = urlParams.get('buscar');

let busquedaData = document.querySelector('.busqueda-data');
let resultadosBusqueda = document.querySelector('.resultados-busqueda');

console.log(resultadosBusqueda);

function cargarResultados(){
  fetch(`https://dummyjson.com/recipes/search?q=${buscador}`)
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(data){
    console.log(data);
    let resultados =data.recipes;
    console.log(resultados.length > 0);

    if(resultados.length > 0){
      let contenido = "";
      for(let i = 0; i < resultados.length; i++){
        let receta = resultados[i]
        contenido += `
        <article class="receta">
          <img src="${receta.image}" alt="${receta.name}" class="receta-img">
          <h2>${receta.name}</h2>
          <p><strong>Dificultad:</strong> ${receta.difficulty || "Desconocida"}</p>
          <a href="receta.html?id=${receta.id}" class="detalle-link">Ver detalles</a>
        </article>
      `;
      }
      console.log(contenido);

      resultadosBusqueda.innerHTML = contenido;
    } else{
      resultadosBusqueda.innerHTML = `<p>No se encontro "${buscador}"</p>`
    }
  })
}

cargarResultados();

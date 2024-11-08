fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(console.log);

const recetasLista = document.querySelector(".recetasLista")
let recetas = ""

fetch('https://dummyjson.com/recipes')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.recipes);
        for(let i=0; i<data.recipes.length; i++){
            const receta = data.recipes[i] //1 receta//
            const markUp = `
            <article class="recetas">
                <img src="${receta.image}" alt="${receta.name}">
                <p>Name: ${receta.name}</p>
                <p>Status: ${receta.status}</p>
            </article>`;
            recetas += markUp
        }
        recetasLista.innerHTML = recetas;
    })

    .catch(function(error){
        console.log("Mi error fue ", error)
    });

/*let confirmacion = document.querySelector(".buscador")

if (confirmacion){
    confirmacion === ""
}else if{
    confirmacion < 3
}*/


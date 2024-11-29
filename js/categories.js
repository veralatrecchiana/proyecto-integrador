const categories = document.querySelector(".categories")


fetch ('https://dummyjson.com/recipes/tags')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let recipesCategory ="";
        for(let i=0; i<data.length; i++){
            let category = data[i];
            recipesCategory += `
            <article class="categorias">
              <h2><a href="category.html?cat=${category}">${category}</a></h2>
            </article>
          `;
            }
        categories.innerHTML += recipesCategory;
    })
    .catch(function(error){
        console.log("Error: "+ error);
    })
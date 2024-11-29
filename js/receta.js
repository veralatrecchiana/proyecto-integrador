let queryString = location.search;
let qsto = new URLSearchParams(queryString);
let id = qsto.get('id');


let url = `https://dummyjson.com/recipes/${id}`;

fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let dataString = JSON.stringify(data);
        console.log(dataString);

        let nombreReceta = document.querySelector('.nombreReceta');
        let instrucciones = document.querySelector('.instrucciones');
        let tiempo = document.querySelector('.tiempo');
        let img = document.querySelector('.imagen');
        let category = document.querySelector('.category');


        nombreReceta.innerText = data.name;
        instrucciones.innerText = data.instructions;
        tiempo.innerText =`Tiempo: ${data.prepTimeMinutes} minutos`;
        img.innerHTML = `<img src="${data.image}" alt="${data.name}" class="receta-img">`;
        
        let tagsList = '';
        for (let i = 0; i < data.tags.length; i++) {
            console.log(data.tags[i]);
            tagsList += `<a href="./category.html?id=${data.tags[i]}" class="tag-link">${data.tags[i]}</a> `;
        }
        console.log(tagsList)
        category.innerHTML = `Ir a su categoria: ${tagsList}`;
    })
    .catch(function (error){
        console.log('el error es:' + error);
        });
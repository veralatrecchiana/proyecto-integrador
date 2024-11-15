let formulario = document.querySelector('#formulario');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let errorEmail = document.querySelector("#error-email")
let errorPassword = document.querySelector('#error-password');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let todosOK = true;

    if (campoEmail.value === '') {
        errorEmail.innerHTML = 'Por favor complete el campo';
        todosOK = false;
    }

    if (campoPassword.value === '') {
        errorPassword.innerHTML = 'Por favor complete el campo';
        todosOK = false;
    } 

    if (todosOK == true) {
        this.submit();  
    }
        });
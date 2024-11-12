let formulario = document.querySelector('#formulario');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let campoRePassword = document.querySelector('#rePassword');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let todosOK = true;

    document.querySelector('#error-email').innerHTML = '';
    document.querySelector('#error-password').innerHTML = '';
    document.querySelector('#error-rePassword').innerHTML = '';

    if (campoEmail.value === '') {
        document.querySelector('#error-email').innerHTML = 'Por favor complete el campo';
        todosOK = false;
    }

    if (campoPassword.value === '') {
        document.querySelector('#error-password').innerHTML = 'Por favor complete el campo';
        todosOK = false;
    } 

    if (todosOK == true) {
        this.submit();  
    }
        });
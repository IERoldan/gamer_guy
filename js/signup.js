// captar los datos que ingresa el user en el form de login
const loginForm = document.querySelector('#loginForm');
console.log(loginForm.elements);

// Tomar los datos del localStorage
let users = localStorage.getItem('users');
// transformarlos a un objeto js
users = JSON.parse(users);


// evitar que se recargue la pagina
function login (evt){
    evt.preventDefault();
    //const email = loginForm.elements.email.value;
    //const password = loginForm.elements.password.value;
    const { email, password } = loginForm.elements;
    console.log(email.value, password.value);

    // verificr si el usuario esta en el array de ususarios registrados
    //   map, ferEach, filter, find, some
    let user = users.find(user => user.email === email.value);
    console.log(user);

    // contraseña que esta en el objeto coincide con la que el user ingreso
// DOS CASOS POSIBLES:
// -alguno de los datos no es correcto
    if(!user || user.password !== password.value) return console.error( 'Error en los datos ingresados')

    // -redireccionarlo a la pagina del home
    // -guardar los datos del usuario actual
    localStorage.setItem('currentUser', JSON.stringify(user))
    window.location.href = '/index.html';
}



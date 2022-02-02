//  captar los datos que ingresa el user en el form d login
//  definir que los datos que ingrese el usuario en el form sean validos
const loginForm = document.querySelector('#loginForm');
console.log(loginForm.elements);
//  tomar los datos del localstorage
const users = localStorage.getItem('users');
//  transformarlos a un obejto js
users = JSON.parse(users);

function login(evt) {
    evt.preventDefault();
    // const email = loginForm.elements.email.value;
    // const password = loginForm.elements.password.value;
    const { email, password } = loginForm.elements;
    console.log(email.value, password.value)
    //  verificar si el usuario esta en el array de usuarios registrados
    //  map, forEach, filter, find, some
    users.find(user => {

    })

}



// contraseña qu esta en el objeto coincide con la contraseña que el usuario ingreso
//  2 casos posbiles
//  -redireccionarlo a la pagina del home
//  -alguno de los datos no es correcto
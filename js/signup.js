// captar los datos que ingresa el user en el form de login
const loginForm = document.querySelector('#loginForm');
console.log(loginForm.elements);

// Tomar los datos del localStorage
let users = localStorage.getItem('users');
// transformarlos a un objeto js
users = JSON.parse(users);

class User {
    constructor(nombreCompleto, correo, contraseña, canAccess = true) {
        this.fullName = nombreCompleto;
        this.email = correo;
        this.password = contraseña;
        this.role = 'CLIENT_ROLE';
    }
}


// evitar que se recargue la pagina
function login (evt){
    evt.preventDefault();
    const { email, password } = loginForm.elements;
    console.log(email.value, password.value);

    // verificr si el usuario esta en el array de ususarios registrados
    //   map, ferEach, filter, find, some
    let user = users.find(user => user.email === email.value);
    console.log(user);

    // contraseña que esta en el objeto coincide con la que el user ingreso
// DOS CASOS POSIBLES:
// -alguno de los datos no es correcto
    if(!user || user.password !== password.value) {
        // document.getElementById('boton').click();
        let myCustomHTMLElement = document.createElement('div')
            myCustomHTMLElement.innerHTML = 'El usuario fue creado correctamente';
            myCustomHTMLElement.classList.add('custom-div')
            document.body.appendChild(myCustomHTMLElement);


        setTimeout(()=> {
            myCustomHTMLElement.parentNode.removeChild(myCustomHTMLElement)
            console.log(myCustomHTMLElement);
        }, 4000)
        return;
        // return console.error( 'Error en los datos ingresados')
    }
    // -redireccionarlo a la pagina del home
    // -guardar los datos del usuario actual
    localStorage.setItem('currentUser', JSON.stringify(user))
    window.location.href = '/index.html';
}

const registerUser = (evt) => {
    // evt.preventDefault();
    // const registerForm = document.querySelector('#registerForm')
    // console.log(registerForm.elements);
    // const {fullName, email, password } = registerForm.elements;
    // const user = new User(fullName.value, email.value, password.value);
    // console.log('nuevo usuario', User)
    
    evt.preventDefault();
    // Levanto los usuarios ya registrados
    let localUsers = JSON.parse(localStorage.getItem('users'));

    // Tomo los datos del formulario
    const registerForm = document.querySelector('#registerForm');
    // Inicializo las variables que necesito tomar del formulario
    const {email, password, fullName } = registerForm.elements;
    const user = new User(fullName.value, email.value, password.value);

    if(localUsers.some(localUser => localUser.email === user.email)) return alert('El usuario ya existe')
    localUsers.push(user);
    localStorage.setItem('users', JSON.stringify(localUsers))
    registerForm.reset();
    registerForm.elements[0].focus()
}



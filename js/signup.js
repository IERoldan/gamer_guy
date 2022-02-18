const loginForm = document.querySelector('#loginForm');
console.log(loginForm.elements);

let users = localStorage.getItem('users');
users = JSON.parse(users);

class User {
    constructor(nombreCompleto, correo, contraseña, canAccess = true) {
        this.fullName = nombreCompleto;
        this.email = correo;
        this.password = contraseña;
        this.role = 'CLIENT_ROLE';
    }
}

function login (evt){
    evt.preventDefault();
    const { email, password } = loginForm.elements;
    console.log(email.value, password.value);

    let user = users.find(user => user.email === email.value);
    console.log(user);

    if(!user || user.password !== password.value) {
        let myCustomHTMLElement = document.createElement('div')
            myCustomHTMLElement.innerHTML = 'El usuario fue creado correctamente';
            myCustomHTMLElement.classList.add('custom-div')
            document.body.appendChild(myCustomHTMLElement);


        setTimeout(()=> {
            myCustomHTMLElement.parentNode.removeChild(myCustomHTMLElement)
            console.log(myCustomHTMLElement);
        }, 4000)
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user))
    window.location.href = '/index.html';
}

const registerUser = (evt) => {
    evt.preventDefault();
    
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


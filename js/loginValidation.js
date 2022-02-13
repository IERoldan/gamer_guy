const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(!currentUser) window.location.href = '/pages/login/login.html';
const users = [
    {
    id: "7",
    email: "boullhesendavid@gmail.com",
    firstName: "David",
    lastName: "Boullhesen",
    password: "administrador",
    role: "ADMIN_ROLE"
    },
    {
    id: "8",
    email: "ivanroldan1989@gmail.com",
    firstName: "Ivan",
    lastName: "Roldan",
    password: "administrador",
    role: "ADMIN_ROLE"
    },
    {
    id: "9",
    email: "dante.sarmientof5@gmail.com",
    firstName: "Dante",
    lastName: "Sarmiento",
    password: "administrador",
    role: "ADMIN_ROLE"
    },
    {
    id: "10",
    email: "lionelmessi@gmail.com",
    firstName: "Lionel",
    lastName: "Messi",
    password: "alfabeta",
    role: "CLIENT_ROLE"
    },
    {
    id: "11",
    email: "rodrigomartinez@gmail.com",
    firstName: "Rodrigo",
    lastName: "Martinez",
    password: "alfabeta",
    role: "CLIENT_ROLE"
    },
    {
    id: "12",
    email: "martinrodriguez@gmail.com",
    firstName: "Martin",
    lastName: "Rodriguez",
    password: "alfabeta",
    role: "CLIENT_ROLE"
    }
    ];
    
    localStorage.setItem('users', JSON.stringify(users));

const navOption = [
    {   viewValue: 'Administrar juegos',
        path: '/pages/administracion/administración.html',
        role: 'ADMIN_ROLE'},
    { viewValue: 'Cerrar Sesión', method: 'logout(event)'},
]
const bodyHTML = document.getElementsByTagName('body');
console.log(bodyHTML);

const navUl = document.getElementById('navLinks');
navOption.map(navItem => {
    let linkHTML = document.createElement('li');
    
    if(navItem.role === 'ADMIN_ROLE' && currentUser.role !== 'ADMIN_ROLE') return;
    if(navItem.method) {
        linkHTML.innerHTML = `<a class="nav-link text-white btn btn-outline-dark" href="" onclick="${navItem.method}">${navItem.viewValue}</a>`
        navUl.appendChild(linkHTML);
        return;
    };

    linkHTML.innerHTML = `<a class="nav-link text-white" href="${navItem.path}">${navItem.viewValue}</a>`;
    navUl.appendChild(linkHTML);
})

function logout(evt) {
    evt.preventDefault();
    localStorage.removeItem('currentUser');
    window.location.href = '/pages/login/login.html';
}
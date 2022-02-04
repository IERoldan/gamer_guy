const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(!currentUser) window.location.href = '/pages/login/login.html';

const navOption = [
    { viewValue: 'Administrar juegos', path: '/pages/administracion/Administracion.html', role: 'ADMIN_ROLE'},
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
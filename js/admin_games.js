let games = JSON.parse(localStorage.getItem('games')) || [];
const gamesForm = document.getElementById('gamesForm');
const gameFormBtnAdd = document.getElementById('gameFormBtnAdd');
const gameFormBtnUpdate = document.getElementById('gameFormBtnUpdate');
let itemToEdit;
var gameModal = document.getElementById('gameModal');

function addGame(event) {
    event.preventDefault();
    let newGame = setObject();
    games.push(newGame);
    refreshGames();
}

function updateGame(e) {
    e.preventDefault();
    games[itemToEdit] = setObject();
    refreshGames();
}

function gameDelete(index) {
    games.splice(index, 1);
    refreshGames();
}

function refreshGames() {
    localStorage.setItem('games', JSON.stringify(games));
    loadGamesList();
}

function loadGamesList() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    games.forEach((game, index) => {
        tableBody.innerHTML +=  `
        <tr class="text-center">
            <td scope="row"><p>${game.cod}</p></td>
            <td><p>${game.name}</p></td>
            <td><p>${game.category}</p></td>
            <td><p>${game.description}</p></td>
            <td>
                <input type="checkbox" class="form-check-input" id="Publicado" name="Publicado">
            </td>
            <td>
                <button type="button" class="btn btn-danger btn-sm" onclick="gameDelete(${index})"><i class="fas fa-trash-alt"></i></button>
                <button data-bs-toggle="modal" data-bs-target="#gameModal" type="button" class="btn btn-warning btn-sm" onclick="gameEdit(${index})" data-edit="true"><i class="far fa-edit"></i></button
                <button type="button" class="btn btn-success btn-sm"><i class="fas fa-star" onclick="setFavorite(${index})"></i></button>
            </td>
        </tr>`;
    })
}

loadGamesList()

function gameEdit(index) {
    let gameToEdit = games[index];
    gamesForm['game-cod'].value = gameToEdit.cod;
    gamesForm['game-name'].value = gameToEdit.name;
    gamesForm['game-description'].value = gameToEdit.description;
    gamesForm['game-category'].value = gameToEdit.category;
    itemToEdit = index;
}

function setObject(){
    const newGame = {
        name: gamesForm['game-name'].value,
        cod: gamesForm['game-cod'].value,
        category: gamesForm['game-category'].value,
        description: gamesForm['game-description'].value,
        active: false,
        favorite: false
    }
    return newGame;
}

gameModal.addEventListener('show.bs.modal', (event)=> {
    //Obtengo el atributo que solo coloco en los botones editar llamado "data-edit"
    //Si es true es porque estoy editando, si es false por que no existe en el botón de agregar significa que debo mostrar el botón de registrar (agregar)
    // Los dos signos de admiración delante el evento se utilizan para transformar algún valor en un booleano
    console.log(!!event.relatedTarget.dataset.edit)

    if(!!event.relatedTarget.dataset.edit) {
        gameFormBtnAdd.classList.add('hidden');
        gameFormBtnUpdate.classList.remove('hidden');
        return;
    }
    document.getElementById('gamesForm').reset()
    gameFormBtnAdd.classList.remove('hidden');
    gameFormBtnUpdate.classList.add('hidden');
})

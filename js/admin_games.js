// Cargar juegos
let games = JSON.parse(localStorage.getItem('games')) || [];
const gamesForm = document.querySelector('#gamesForm');
// Recorrer el array de juegos para mostrar el listado
console.log("SDasdas")
// Añadir un nuevo juego a mi array de games
// gamesForm.addEventListener('onsubmit', (event) => {
//     event.preventDefault();
//     console.log(event)
// })
// 
function setGame(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    let newGame = {
        name: formElements['game-name'].value,
        cod: formElements['game-cod'].value,
        category: formElements['game-category'].value,
        description: formElements['game-description'].value,
        active: false,
        favorite: false
    }
    console.log(newGame);
    games.push(newGame);
    refreshGames();
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
                <button type="button" class="btn btn-warning btn-sm"><i class="far fa-edit"></i></button
                <button type="button" class="btn btn-success btn-sm"><i class="fas fa-star" onclick="setFavorite(${index})"></i></button>
            </td>
        </tr>`;
    })
}
loadGamesList()
function gameDelete(index) {
    games.splice(index, 1);
    refreshGames();
}

function refreshGames() {
    localStorage.setItem('games', JSON.stringify(games));
    loadGamesList();
}

function setFavorite(index) {
    // games.for
}
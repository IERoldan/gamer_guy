// Cargar juegos
let games = JSON.parse(localStorage.getItem('games')) || [];

const gamesForm = document.querySelector('#gamesForm');
const cardlist = document.querySelector('#cardList');
// Recorrer el array de juegos para mostrar el listado
// Añadir un nuevo juego a mi array de games
// gamesForm.addEventListener('onsubmit', (event) => {
//     event.preventDefault();
//     console.log(event)
// })
// 
const loadImage = (evt) => {
    const inputImgValue = evt.target.value;
    const ImgPreviewElement = document.getElementById('img-preview');
    ImgPreviewElement.setAttribute('src', inputImgValue)
}

function setGame(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    let newGame = {
        name: formElements['game-name'].value,
        cod: formElements['game-cod'].value,
        category: formElements['game-category'].value,
        image: formElements['game-picture'].value,
        description: formElements['game-description'].value,
        active: formElements['publicado'].checked,
        favorite: false

    }
    games.push(newGame);
    refreshGames();
}


function loadGamesList() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    games.forEach((game, index) => {
        tableBody.innerHTML += `
        <tr class="text-center align-middle">
            <td scope="row"><p class="m-0">${game.cod}</p></td>
            <td><p class="m-0">${game.name}</p></td>
            <td><p class="m-0">${game.category}</p></td>
            <td><img src="${game.image}" width="100rem"></td>
            <td><p class="m-0">${game.description}</p></td>
            <td>
                <input type="checkbox" class="form-check-input" id="Publicado" checked=${game.active} name="Publicado">
            </td>
            <td>
                <button type="button" class="btn btn-danger btn-sm" onclick="gameDelete(${index})"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-warning btn-sm" onclick="gameAvalible(${index})"><i class="far fa-edit"></i></button>
                <button type="button" class="btn btn-success btn-sm" onclick="setFavorite(${index})"><i class="fas fa-star"></i></button>
            </td>
        </tr>`;
    })
}

function gameDelete(index) {
    games.splice(index, 1);
    refreshGames();
}

function refreshGames() {
    localStorage.setItem('games', JSON.stringify(games));
    printCardGames();
    loadGamesList();
}

function setFavorite(index) {
    // games.for
}

function printCardGames() {
 
  cardlist.innerHTML = "";

  games.forEach((game, index) => {
      if (game.active) {
          cardlist.innerHTML +=
      `
      <div class="col">
          <div class="card">
              <img src="${game.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${game.name}</h5>
                                <p class="card-text">${game.description}</p>
                  </div>
          </div>
      </div>
      `}
  })
}

loadGamesList()
printCardGames();
let games = JSON.parse(localStorage.getItem('games')) || [];
const gamesForm = document.getElementById('gamesForm');
const gameFormBtnAdd = document.getElementById('gameFormBtnAdd');
const gameFormBtnUpdate = document.getElementById('gameFormBtnUpdate');
let itemToEdit;
var gameModal = document.getElementById('gameModal');
const cardlist = document.querySelector('#cardList');
const loadImage = (evt) => {
    const inputImgValue = evt.target.value;
    const ImgPreviewElement = document.getElementById('img-preview');
    ImgPreviewElement.setAttribute('src', inputImgValue)
}

function addGame(event) {
    event.preventDefault();
    let newGame = setObject();
    console.log(newGame);
    games.push(newGame);
    refreshGames();
}

function updateGame(e) {
    e.preventDefault();
    games[itemToEdit] = setObject();
    refreshGames();
    printCardGames()
}

function gameDelete(index) {
    games.splice(index, 1);
    refreshGames();
    printCardGames()
}

function refreshGames() {
    localStorage.setItem('games', JSON.stringify(games));
    loadGamesList();
    printCardGames()
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
            <td><img src="${game.image}" width="100rem" height="100rem"></td>
            <td><p class="m-0">${game.description}</p></td>
            <td>
                <input type="checkbox" class="form-check-input" id="Publicado" checked=${game.active} name="Publicado">
            </td>
            <td>
                <button type="button" class="btn btn-danger btn-sm" onclick="gameDelete(${index})"><i class="fas fa-trash-alt"></i></button>
                <button data-bs-toggle="modal" data-bs-target="#gameModal" type="button" class="btn btn-warning btn-sm" onclick="gameEdit(${index})" data-edit="true"><i class="far fa-edit"></i></button>
                <button type="button" class="btn btn-success btn-sm" onclick="setFavorite(${index})"><i class="fas fa-star" ></i></button>
            </td>
        </tr>`;
    })
}

loadGamesList()

function gameEdit(index) {
    let gameToEdit = games[index];
    gamesForm['game-cod'].value = gameToEdit.cod;
    gamesForm['game-name'].value = gameToEdit.name;
    gamesForm['game-category'].value = gameToEdit.category;
    gamesForm['game-picture'].value = gameToEdit.image
    gamesForm['game-description'].value = gameToEdit.description;
    gamesForm['publicado'].checked = gameToEdit.active;
    itemToEdit = index;
}

function setObject(){
    const newGame = {
        cod: gamesForm['game-cod'].value,
        name: gamesForm['game-name'].value,
        category: gamesForm['game-category'].value,
        image: gamesForm['game-picture'].value,
        description: gamesForm['game-description'].value,
        active: gamesForm['publicado'].checked,
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
                        <h5 class="card-title"><strong>${game.name}</strong></h5>
                                  <p class="card-text">${game.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Categorias:</strong> ${game.category}</li>
                    </ul>
                  <div class="card-body">
                    <a href="" class="card-link"><button type="button" class="btn btn-primary btn-sm"><i
                          class="fas fa-info-circle"></i></button></a>
                    <a href="#" class="card-link"><button type="button" class="btn btn-success btn-sm"><i
                          class="fas fa-shopping-cart"></i></button></a>
                  </div>
            </div>
        </div>
        `}
    })
  }
  
  loadGamesList()
  printCardGames();
  
let games = JSON.parse(localStorage.getItem('games')) || [];
const cardlist = document.querySelector('#cardList');

function printCardGames() {
 
    cardlist.innerHTML = "" || [];
  
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

  printCardGames();
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const game = {
    state: Array.from({ length: 9 }).fill(undefined),
    currentPlayer: PLAYER_1,
}
const containerDiv = document.createElement("div");
containerDiv.id = "container-grid";

for(let index = 0; index < 9; index++) {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field';
    fieldDiv.id = index;
    fieldDiv.setAttribute('onclick', 'handleClick(' + index + ')');
    containerDiv.appendChild(fieldDiv);
}
document.body.appendChild(containerDiv);

const set = (value, index) => {
    game.state[index] = value;
    let div = document.getElementById(index);
    div.innerHTML = value;
};

const handleClick = (index) => {
    if (game.state[index] === undefined) {

        const playerSymbol = game.currentPlayer === PLAYER_1 ? 'X' : 'O';
        set(playerSymbol, index);

        game.currentPlayer === PLAYER_1 ?  game.currentPlayer = PLAYER_2 :  game.currentPlayer = PLAYER_1;
    }
};
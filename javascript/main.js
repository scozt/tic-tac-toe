const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GAME = {
    STATE: Array.from({ length: 9 }).fill(undefined),
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
    GAME.STATE[index] = value;
    let div = document.getElementById(index);
    div.innerHTML = value;
};

const handleClick = (index) => {
    if (GAME.STATE[index] === undefined) {

        const playerSymbol = GAME.currentPlayer === PLAYER_1 ? 'X' : 'O';
        set(playerSymbol, index);

        GAME.currentPlayer === PLAYER_1 ?  GAME.currentPlayer = PLAYER_2 :  GAME.currentPlayer = PLAYER_1;
    }
};
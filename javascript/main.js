const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const GAME = {
    STATE: Array.from({ length: 9 }).fill(undefined),
    currentPlayer: PLAYER_1,
    isFinished: false,
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
let gameStateDiv = document.createElement("div");
gameStateDiv.id = "gameState";
containerDiv.appendChild(gameStateDiv);

document.body.appendChild(containerDiv);

const set = (value, index) => {
    GAME.STATE[index] = value;
    let div = document.getElementById(index);
    div.innerHTML = value;
};

const determineTheWinnerFor = (symbol) => {
    const fieldIndexCombinationsToFindoutTheWinner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let firstFieldIndex, secondFieldIndex, thirdFieldIndex;
    for(let fieldIndexes of fieldIndexCombinationsToFindoutTheWinner) {

        [firstFieldIndex, secondFieldIndex, thirdFieldIndex] = fieldIndexes;
        if(symbol === GAME.STATE[firstFieldIndex] &&
            GAME.STATE[firstFieldIndex] === GAME.STATE[secondFieldIndex] &&
            GAME.STATE[secondFieldIndex] === GAME.STATE[thirdFieldIndex]) {
            GAME.isFinished = true;
            return symbol;
        }
    }

    return undefined;
};

const restartGame = () => {

    let fields = document.getElementsByClassName("field");

    for (let index = 0; index < GAME.STATE.length; index++) {
        GAME.STATE[index] = undefined;
        fields[index].innerHTML = "";
    }
    gameStateDiv.innerHTML = GAME.currentPlayer + ' is your turn';
    GAME.isFinished = false;
}
const handleClick = (index) => {
    if (GAME.STATE[index] === undefined && GAME.isFinished !== true) {

        set(GAME.currentPlayer, index);


        const winnerDetermined = determineTheWinnerFor(GAME.currentPlayer);
        if(!GAME.STATE.includes(undefined) && winnerDetermined === undefined) {
            gameStateDiv.innerHTML = "Ended in a tie" + "<button onclick=\"restartGame()\">restart game</button>";
        }
        else if(winnerDetermined === undefined) {
            GAME.currentPlayer === PLAYER_1 ? GAME.currentPlayer = PLAYER_2 : GAME.currentPlayer = PLAYER_1;
            gameStateDiv.innerHTML = GAME.currentPlayer + ' is your turn';
        } else {
            gameStateDiv.innerHTML = GAME.currentPlayer + ' wins ' + '<button onclick="restartGame()"> restart game </button>';
        }
    }
};
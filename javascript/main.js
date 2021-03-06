const PLAYER_1 = "X";
const PLAYER_2 = "O";

const GAME = {
  STATE: Array.from({ length: 9 }).fill(undefined),
  currentPlayer: PLAYER_1,
  isFinished: false,
};

window.onload = (function buildUI() {
  const containerDiv = document.createElement("div");
  containerDiv.id = "container-grid";

  for (let index = 0; index < 9; index++) {
    const fieldDiv = document.createElement("div");
    fieldDiv.className = "field";
    fieldDiv.id = index;
    fieldDiv.setAttribute("onclick", "handleClick(" + index + ")");
    containerDiv.appendChild(fieldDiv);
  }
  let gameStateDiv = document.createElement("div");
  gameStateDiv.id = "gameState";
  containerDiv.appendChild(gameStateDiv);

  document.body.appendChild(containerDiv);

  showTheTurnOfTheCurrentPlayer();
})();

function showTheTurnOfTheCurrentPlayer() {
  const gameStateDiv = document.getElementById("gameState");
  gameStateDiv.innerHTML = " it's your turn: " + GAME.currentPlayer;
}

const set = (value, index) => {
  GAME.STATE[index] = value;
  let div = document.getElementById(index);
  div.innerHTML = value;
};

const determineTheWinnerFor = (player) => {
  const fieldIndexCombinationsToFindoutTheWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let firstFieldIndex, secondFieldIndex, thirdFieldIndex;
  for (let fieldIndexes of fieldIndexCombinationsToFindoutTheWinner) {
    [firstFieldIndex, secondFieldIndex, thirdFieldIndex] = fieldIndexes;
    if (
      player === GAME.STATE[firstFieldIndex] &&
      GAME.STATE[firstFieldIndex] === GAME.STATE[secondFieldIndex] &&
      GAME.STATE[secondFieldIndex] === GAME.STATE[thirdFieldIndex]
    ) {
      GAME.isFinished = true;
      return player;
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
  showTheTurnOfTheCurrentPlayer();
  GAME.isFinished = false;
};
const show = (message) => {
  const gameStateDiv = document.getElementById("gameState");
  gameStateDiv.innerHTML = message;
};
const handleClick = (index) => {
  if (GAME.STATE[index] === undefined && GAME.isFinished !== true) {
    set(GAME.currentPlayer, index);

    const winnerDetermined = determineTheWinnerFor(GAME.currentPlayer);
    if (!GAME.STATE.includes(undefined) && winnerDetermined === undefined) {
      show(
        "Ended in a tie" +
          '<button onclick="restartGame()">restart game</button>'
      );
    } else if (winnerDetermined === undefined) {
      GAME.currentPlayer === PLAYER_1
        ? (GAME.currentPlayer = PLAYER_2)
        : (GAME.currentPlayer = PLAYER_1);
      showTheTurnOfTheCurrentPlayer();
    } else {
      show(
        GAME.currentPlayer +
          " wins " +
          '<button onclick="restartGame()"> restart game </button>'
      );
    }
  }
};

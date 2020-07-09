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
    fieldDiv.setAttribute('onclick', 'handleClick(' + index + ')');
    containerDiv.appendChild(fieldDiv);
}
document.body.appendChild(containerDiv);

const handleClick = (index) => {
    console.table(game.state);
};
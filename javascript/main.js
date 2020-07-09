
const game = {
    state: Array.from({ length: 9 }).fill(undefined),
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
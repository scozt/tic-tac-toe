const containerDiv = document.createElement("div");
containerDiv.id = "container-grid";

for(let index = 0; index < 9; index++) {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field';
    fieldDiv.id = index;
    containerDiv.appendChild(fieldDiv);
}
document.body.appendChild(containerDiv);
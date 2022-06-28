const gridContainer = document.querySelector("#grid-container");
for(let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-elem");
    gridContainer.appendChild(newDiv);
}
const gridContainer = document.querySelector("#grid-container");
const resizeButton  = document.querySelector("button#resize");

function removeAllChildren(parentNode) {
    while(parentNode.firstChild)
        parentNode.removeChild(parentNode.firstChild);
}

function drawGrid(sideLength) {
    if(sideLength > 100)
        return;
    if(gridContainer.firstChild)
        removeAllChildren(gridContainer);

    for(let i = 0; i < sideLength; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("grid-row");

        for(let i = 0; i < sideLength; i++) {
            let newElem = document.createElement("div");
            newElem.classList.add("grid-elem");
            newRow.appendChild(newElem);
        }

        gridContainer.appendChild(newRow);
    }

    const gridElems = document.querySelectorAll(".grid-elem");
    gridElems.forEach(ge => ge.addEventListener("mouseover", function(e) {
        this.classList.add("hover");
    }));
}

drawGrid(16);
resizeButton.addEventListener("click", () => {
    let newSideLen = parseInt(prompt("Enter the new grid size (max 100):"));
    drawGrid(newSideLen);
});
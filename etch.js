const gridContainer = document.querySelector("#grid-container");

function removeAllChildren(parentNode) {
    while(parentNode.firstChild)
        parentNode.removeChild(parentNode.firstChild);
}

function drawGrid(sideLength) {
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
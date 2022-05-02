const gridCont = document.querySelector('.Grid');
let gridRow;
let gridSqr;
for (let i=0; i < 16; i++) {
    gridRow = document.createElement('div');
    gridRow.setAttribute('style','display: flex')
    for (let j=0; j < 16; j++) {
        gridSqr = document.createElement('div');
        gridSqr.setAttribute('style', 'height: 30px; width:30px; border: 1px solid black; background-color:white;');
        gridRow.appendChild(gridSqr);
    }
    gridCont.appendChild(gridRow);
}
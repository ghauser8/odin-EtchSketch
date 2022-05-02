const gridCont = document.querySelector('.Grid');
let gridRow;
let gridSqr;
let gMat = [];
for (let i=0; i < 16; i++) {
    gridRow = document.createElement('div');
    gridRow.setAttribute('style','display: flex')
    gMat[i] = []
    for (let j=0; j < 16; j++) {
        gMat[i][j] = document.createElement('div'); 
        //gridSqr = document.createElement('div');
        //gridSqr.setAttribute('style', 'height: 30px; width:30px; border: 1px solid black; background-color:white;');
        gMat[i][j].setAttribute('style', 'height: 30px; width:30px; border: 1px solid black; background-color:white;');
        //gridSqr.addEventListener('mouseover', clrFunc(gridSqr));
        gMat[i][j].addEventListener('mouseover', clrFunc);
        gridRow.appendChild(gMat[i][j]);
    }
    gridCont.appendChild(gridRow);
}

function clrFunc() {
    this.setAttribute('style', 'height: 30px; width:30px; border: 1px solid black; background-color:blue;');
}
const container = document.querySelector("#container");
const resizenBtn = document.querySelector("#resizen-btn");


/*function getrandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}*/
function createGrid(gridsize){

let totalsize =  gridsize * gridsize;
let squaresize = 960 / gridsize;

for(let i = 0; i < totalsize; i++ ) {
    const square = document.createElement("div");

    square.style.width = `${squaresize}px`;
    square.style.height = `${squaresize}px`;
    square.style.border = "1px solid #ddd";
    square.style.boxSizing= "border-box";

    // 1 SET UP A DARKNESS COUNTER ON THE SQUARE
    square.dataset.darkness = 0;
   
    // 2 THE PROGRESSIVE DARKENING MOUSEENTER EVENT
    square.addEventListener("mouseenter", function(){
        //Get the current darkness level from the square's dataset
        let currentDarkness = Number(square.dataset.darkness);

        if(currentDarkness < 10) {
            currentDarkness += 1;
            square.dataset.darkness = currentDarkness;
            let opacityvalue = currentDarkness * 0.1;
        
        square.style.backgroundColor = `rgba(0,0,0, ${opacityvalue})`;
        }
    });

    container.appendChild(square);

}
}
createGrid(16);



resizenBtn.addEventListener("click", function(){
    let userinput = prompt("Enter number of squares per side (max 100):");
     
    let newsize = parseInt(userinput);

   if (isNaN(newsize) || newsize <= 0 || newsize > 100) {
     alert("please enter a valid number between 1 and 100!");
     return;
   }

   container.innerHTML = "";

   createGrid(newsize);
})

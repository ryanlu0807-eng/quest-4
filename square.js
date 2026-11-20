let topIndex = 0;
let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
document.querySelector('#add').onclick = addSquare;
document.querySelector('#colors').onclick = changeColors;


function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    let size = parseInt(Math.random()*11)+45;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.backgroundColor=getRandomColor();
    square.style.top = parseInt(Math.random()*(300-50))+"px";
    square.style.left = parseInt(Math.random()*(700-50))+"px";
    square.onclick = squareClick;
    squareArea.append(square);
}


function pageLoad(){

    for(let i = 0; i < squareCount; i++){
        addSquare();
    }
}

window.onload = pageLoad;

function getRandomColor(){
    let possibleLetters = "0123456789ABCDEF";
    let color="#";
    //Do something to make a random value????
    for(let i = 0;i <6;i++){
        let position = parseInt(Math.random()*
        possibleLetters.length)
        color+=possibleLetters.charAt(position);
    }
    return color;
}
function changeColors() {
    let squares = document.querySelectorAll(".square");

    for(let i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();

    }
}
    function squareClick(){
        if(this.style.zIndex==topIndex){
            this.parentNode.removeChild(this);
        }
        else{
            topIndex++;
        this.style.zIndex = topIndex;

        }
    }

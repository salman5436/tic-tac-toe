document.addEventListener('DOMContentLoaded', function() {
    /*-----------> DOM REFS <-------------------*/ 
    let everyMove = document.querySelectorAll('.moveSpace');
    let gameSpace = document.querySelector('.gameFace');
    let restartBtn = document.querySelector('#restart');

    
    let topLeft = document.getElementById("0");
    let topMid = document.getElementById("1");
    let topRight = document.getElementById("2");
    let midLeft = document.getElementById("3");
    let center = document.getElementById("4");
    let midRight = docuemt.getElementById("5");
    let bottomLeft = document.getElementById("6");
    let bottomMid = document.getElementById("7");
    let bottomRight = document.getElementById("8");

    /*-----------> Game Logic Variables <-----------*/ 
    let userTurn = null;
    let computerTurn = null;
    let playerMove = "X";
    let compMove = "O"
    let winConditions = [[0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,4,8], 
    [6,4,2], 
    [0,3,6],
    [1,4,7]
    [2,5,8]];

    let gameState = ["", "", "", "", "", "", "", "", ""]

    /*-----------> Event Listener <-----------*/ 
    everyMove.addEventListener('click', function {
        everyMove.innerText = "X";



    });
    


    // function init() {
    //     clickedBox.innerText = playerMove;
    
        // for (var i = 0; i < everyMove.length; i++) {
        //     everyMove[i].innerText = '';
        //     everyMove[i].addEventListener('click', click)
        // }
    // }
    
    //function to register click
    function click(e) {
        console.log(e.target.id);
    }


    //Function to alternate player
})
let gameActive=true;
let gameState=["","","","","","","","",""];
let current_player="X";
let playerStatus=document.getElementById("game_status");
playerStatus.innerHTML=`It's ${current_player}'s turn`;

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", cellClick));

function cellClick( clickevent){
    let clickedcell=clickevent.target;
    let cellindex=parseInt(clickedcell.getAttribute("data-ns-test"));
    if(gameState[cellindex] != "" || !gameActive){
        return;
    }
    gameState[cellindex]=current_player;
    clickedcell.innerHTML=current_player;
    
    handleResult();
}

let wincondtn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleResult(){
    let result=false;
    for(arr of wincondtn){
        let a=gameState[arr[0]];
        let b=gameState[arr[1]];
        let c=gameState[arr[2]];
        if(a=="" || b=="" || c==""){
            continue;
        }
        if(a==b && b==c){
            result=true;
            break;
        }

    }
    if(result){
        playerStatus.innerHTML=`Player ${current_player} has Won. Congratulations!!`;
        gameActive=false;
        return;
    }
    let draw=!gameState.includes("");
    if(draw){
        playerStatus.innerHTML="Its a Draw !";
        gameActive=false;
        return;
    }
    current_player=current_player==="X"? "O" : "X";
    playerStatus.innerHTML=`It's ${current_player}'s turn`;
}


function restartGame(){
    gameActive=true;
    current_player="X";
    gameState=["","","","","","","","",""];
    playerStatus.innerHTML=`It's ${current_player}'s turn`;
    let tiles=document.getElementsByClassName("cell");
    let single_element;
    for(single_element of tiles){
        single_element.innerHTML="";
    }
}



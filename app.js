let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");


let turn0 = true;
let count = 0;

const winpatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enableableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winpatt){
           let pos1val =  boxes[pattern[0]].innerText;
           let pos2val = boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

const resetGame = ()=>{
    turn0 = true;
    enableableBoxes();
    msgcontainer.classList.add("hide");
}


newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);
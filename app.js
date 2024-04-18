let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rst-btn");
let newgame=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true;//playerx,playerY

const winPattern =[
    [0,1,2],
    [0,3,4],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcont.classList.add("hide");
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
        box.innerText="O";
        turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();

        if(count===9 && !isWinner){
          noWinner();
        }
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
}

const noWinner=()=>{
    msg.innerText="No Winnwer!!!!!";
    msgcont.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for( let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                // console.log("winner",pos1)

                showWinner(pos1);
              disableBoxes();
            }
        }
    
    }
};

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


console.log("welcome");

let music= new Audio("music.mp3");
let aturn= new Audio ("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn = "X";
let gamenover= false;

// fn to change the turn

const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

//fn to check for win

const checkwin= () => {
    let boxtexts= document.getElementsByClassName('boxtext');
 let wins= [ []]
}

//main game logic

let boxes= document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText==' '){
            boxtext.innerText=turn;
            turn=changeturn();
            aturn.play();
            checkwin();
            document.getElementsByClassName("info")[0].innerText= "turn for" + turn;
        }
    })
})

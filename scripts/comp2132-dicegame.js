
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
  
var playerScore = document.getElementById("playerScore");
var pTotalScore = document.getElementById("pTotalScore");
var computerScore = document.getElementById("computerScore");
var cTotalScore = document.getElementById("cTotalScore");
var win = document.getElementById("win");

let pScore =0;
let cScore = 0;
let pTScore = 0;
let cTScore = 0;

const rollDice = document.getElementById("btn-start");
const stopDice = document.getElementById("btn-stop");
const reset    = document.getElementById("reset");

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");

let diceAnimationHandler;
let keepSpining = false;
let timeoutHandler;   

var count =0;

const maxImageNumber = 6;
let currentDice1 = 1;
let currentDice2 = 6;
let currentDice3 = 1;
let currentDice4 = 6;


rollDice.addEventListener("click",function(){
    count++;
    keepSpining = true;
    diceAnimationHandler = requestAnimationFrame(spinImage);
});

stopDice.addEventListener("click", function(){
    
    pTotalScore.innerHTML = "";
    cTotalScore.innerHTML ="";

    var randomNumber1 = Math.floor(Math.random() * 5) + 1; 
    var randomNumber2 = Math.floor(Math.random() * 5) + 1; 
    var randomNumber3 = Math.floor(Math.random() * 5) + 1; 
    var randomNumber4 = Math.floor(Math.random() * 5) + 1; 

    dice1.src = `images/dice${randomNumber1}.png`;
    dice2.src = `images/dice${randomNumber2}.png`;
    dice3.src = `images/dice${randomNumber3}.png`;
    dice4.src = `images/dice${randomNumber4}.png`;
    
    pScore = randomNumber1 + randomNumber2;
    cScore = randomNumber3 + randomNumber4;

    pTScore += pScore;
    cTScore += cScore;

    playerScore.innerHTML = '<p>'+pScore +'</p>';
    pTotalScore.innerHTML = '<p>'+pTScore +'</p>';
    computerScore.innerHTML ='<p>'+cScore +'</p>';
    cTotalScore.innerHTML = '<p>'+cTScore +'</p>';

    if (count === 3){
        if (pTScore > cTScore){
            win.innerHTML ='<p>Player wins</p>';
        }else if(pTScore < cTScore){
            win.innerHTML ='<p>Computer wins!</p>';
        }else{
            win.innerHTML ='<p>Tie Game!</p>';
        }
    }

    clearTimeout(timeoutHandler);
    cancelAnimationFrame(diceAnimationHandler);
});

function spinImage(){    
    //determine the next image
    currentDice1++;
    currentDice2++;
    currentDice3++;
    currentDice4++;
    //if end of images, start again
    if(currentDice1 > maxImageNumber ){
        currentDice1 = 1;
    }
    if(currentDice2 > maxImageNumber ){
        currentDice2 = 1;
    }
    if(currentDice3 > maxImageNumber ){
        currentDice3 = 1;
    }
    if(currentDice4 > maxImageNumber ){
        currentDice4 = 1;
    }
    //update image
    dice1.src = `images/dice${currentDice1}.png`;
    dice2.src = `images/dice${currentDice2}.png`;
    dice3.src = `images/dice${currentDice3}.png`;
    dice4.src = `images/dice${currentDice4}.png`;

    //pause in between each frame of animation
    timeoutHandler = setTimeout(function(){
        //callback for the next frame of animation
        diceAnimationHandler = requestAnimationFrame( spinImage );
    }, 100);  
}

reset.addEventListener("click", function(){

    count = 0;
    win.innerHTML = '<p>Welcome to My Dice Game!</p>';

    pScore = 0;
    cScore = 0;
    pTScore = 0;
    cTScore = 0;

    dice1.src = `images/dice${1}.png`;
    dice2.src = `images/dice${6}.png`;
    dice3.src = `images/dice${1}.png`;
    dice4.src = `images/dice${6}.png`;

    playerScore.innerHTML = '<p>'+pScore +'</p>';
    pTotalScore.innerHTML = '<p>'+pTScore +'</p>';
    computerScore.innerHTML ='<p>'+cScore +'</p>';
    cTotalScore.innerHTML = '<p>'+cTScore +'</p>';
});







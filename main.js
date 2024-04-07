const computerChoiceDislay = document.getElementById('computer-choice');
const yourChoiceDislay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    yourChoiceDislay.innerHTML = userChoice;
    generatedComputerChoice();
    getresult();
}))

function generatedComputerChoice(){
    const possibleComputerChoices = Math.floor( Math.random()*possibleChoices.length)+1
    if(possibleComputerChoices === 1){
      computerChoice = 'Rock'
    }
    if(possibleComputerChoices === 2){
      computerChoice = 'Paper'
    }
    if(possibleComputerChoices === 3){
      computerChoice = 'Scissors'
    }
    computerChoiceDislay.innerHTML = computerChoice;

}

function getresult() {
  if(userChoice === computerChoice){
    result = "its a draw";
    textColor = "yellow"
  }
  if(userChoice === "Rock" && computerChoice==="Paper"){
    result = "you lose!";
    textColor = "red"
  }
  if(userChoice === "Rock" && computerChoice==="Scissors"){
    result = "you win!";
    textColor = "green";
  }
  if(userChoice === "Paper" && computerChoice==="Rock"){
    result = "you win!";
    textColor = "green";
  }
  if(userChoice === "Paper" && computerChoice==="Scissors"){
    result = "you lose!";
    textColor = "red";
  }
  if(userChoice === "Scissors" && computerChoice==="Rock"){
    result = "you lose!";
    textColor = "red";
  }
  if(userChoice === "Scissors" && computerChoice==="Paper"){
    result = "you win!";
    textColor = "green";
  }

  resultDisplay.innerHTML = result;
  resultDisplay.style.color = textColor; 
}
let roundsPlayed = 0;
let scoreConputer = 0;
let scoreHuman = 0;
const winMessage = "Congratulation, you won";
const loseMessage = "You Lost, good luck next time";
function getComputerChoice() {
  number = Math.random();
  console.log(number);
  if (number < 0.33) {
    return "Schere";
  } else if (number > 0.33 && number < 0.66) {
    return "Stein";
  } else {
    return "Papier";
  }
}
function getPlayerChoice() {
  const Choice = prompt("Schere, Stein oder Papier");
  if (Choice.toLowerCase() === "schere") {
    return "Schere";
  } else if (Choice.toLowerCase() === "stein") {
    return "Stein";
  } else {
    return "Papier";
  }
}
function playRound(computerChoice, humanChoice) {
  roundsPlayed++;
  if (computerChoice === humanChoice) {
    console.log("tie");
  } else {
    if (computerChoice === "Stein" && humanChoice === "Schere") {
      console.log(loseMessage);
      scoreConputer++;
    } else if (computerChoice === "Stein" && humanChoice === "Papier") {
      console.log(winMessage);
      scoreHuman++;
    } else if (computerChoice === "Papier" && humanChoice === "Schere") {
      console.log(winMessage);
      scoreHuman++;
    } else if (computerChoice === "Papier" && humanChoice === "Stein") {
      console.log(loseMessage);
      scoreConputer++;
    } else if (computerChoice === "Schere" && humanChoice === "Papier") {
      console.log(loseMessage);
      scoreConputer++;
    } else {
      console.log(winMessage);
      scoreHuman++;
    }
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let humanSelection = getPlayerChoice();
    playRound(computerSelection, humanSelection);
    console.log(roundsPlayed);
  }
  console.log("Computer Score " + scoreConputer);
  console.log("Your Score " + scoreHuman);
  if (scoreHuman > scoreConputer) {
    console.log(winMessage);
  } else if (scoreConputer === scoreHuman) {
    console.log("tie");
  } else {
    console.log(loseMessage);
  }
}
playGame();

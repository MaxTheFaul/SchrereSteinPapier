let roundsPlayed = 0;
let scoreConputer = 0;
let scoreHuman = 0;
const winMessage = "Congratulation, you won";
const loseMessage = "You Lost, good luck next time";
const sect = document.querySelector(".section");
console.log(sect);
function getComputerChoice() {
  number = Math.random();
  logMessage(number);
  if (number < 0.33) {
    return "Schere";
  } else if (number > 0.33 && number < 0.66) {
    return "Stein";
  } else {
    return "Papier";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getComputerChoice(), button.id);
  });
});

function playRound(computerChoice, humanChoice) {
  roundsPlayed++;
  if (computerChoice === humanChoice) {
    logMessage("tie");
  } else {
    if (computerChoice === "Stein" && humanChoice === "Schere") {
      logMessage(loseMessage);
      scoreConputer++;
    } else if (computerChoice === "Stein" && humanChoice === "Papier") {
      logMessage(winMessage);
      scoreHuman++;
    } else if (computerChoice === "Papier" && humanChoice === "Schere") {
      logMessage(winMessage);
      scoreHuman++;
    } else if (computerChoice === "Papier" && humanChoice === "Stein") {
      logMessage(loseMessage);
      scoreConputer++;
    } else if (computerChoice === "Schere" && humanChoice === "Papier") {
      logMessage(loseMessage);
      scoreConputer++;
    } else {
      logMessage(winMessage);
      scoreHuman++;
    }
  }
  if (roundsPlayed >= 5) {
    winChoice();
  }
}
function winChoice() {
  logMessage("Computer Score " + scoreConputer);
  logMessage("Your Score " + scoreHuman);
  if (scoreHuman > scoreConputer) {
    logMessage(winMessage);
  } else if (scoreConputer === scoreHuman) {
    logMessage("tie");
  } else {
    logMessage(loseMessage);
  }
}
function logMessage(message) {
  const para = document.createElement("p");
  para.textContent = message;
  sect.appendChild(para);
  const txt = document.createElement("p");
  txt.textContent =
    "----------------------------------------------------------------------------";
  sect.appendChild(txt);
}

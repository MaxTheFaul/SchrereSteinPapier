let roundsPlayed = 0;
let scoreConputer = 0;
let scoreHuman = 0;
function getComputerChoice() {
  number = Math.random();
  console.log(number);
  if (number < 0.33) {
    return choice = "Schere";
  }
  else if (number > 0.33 && number < 0.66) {
    return choice = "Stein";
  } else {
    return choice = "Papier";
  }
}
function getPlayerChoice(){
    const Choice = prompt("Schere, Stein oder Papier")
    if (Choice.toLowerCase() === "schere") {
        return playerChoice = "Schere"
    }else if (Choice.toLowerCase() === "stein") {
        return playerChoice = "Stein"
    } 
    else {
        return playerChoice = "papier"
    }
    
}

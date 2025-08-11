function getComputerChoice() {
  number = Math.random();
  console.log(number);
  if (number < 0.33) {
    return choice = "Schere";
  }
  if (number > 0.33 && number < 0.66) {
    return choice = "Stein";
  } else {
    return choice = "Papier";
  }
}
console.log(getComputerChoice());

const startTheGameButton = window.document.getElementById("start-the-game-button");
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const DRAW = 'DRAW';
const USER_WINS = 'Human being is still the winner';
const AI_WINS = 'Artificial Intelligence won the human race';

let running = false

// The idea is to expand the classical Rock, Paper and Scissors game to cover Star Trek symbolism
// You could replace Scissors, Rock and Paper with Spock greeting, holodeck, Klingon or like etc..
// and also you can compose more terms/actions/rules than it was in the original game
getActionsFromThePlayer = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`You did something wrong... the ${DEFAULT_CHOICE} is automatically chosen for you`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

getAIChoice = function () {
  const randomizedValue = Math.random();
  if (randomizedValue < 0.34) {
    return ROCK;
  } else if (randomizedValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

const findTheWinner = function(aChoice, uChoice) {
  if (aChoice === uChoice) {
    return DRAW;
  } else if (
    aChoice === ROCK && uChoice === PARER ||
    aChoice === PAPER && uChoice === SCISSORS ||
    aChoice === SCISSORS && uChoice === ROCK) {
    return USER_WINS;
  } else {
    return AI_WINS;
  }
}

startTheGameButton.addEventListener('click', function() {
  if (running) {
    return;
  }
  running = true
  console.log('The game is about to begin');
  const whatThePlayerHasSelected = getActionsFromThePlayer();
  const whatTheAIHasSelected = getAIChoice();
  const winner = findTheWinner(whatTheAIHasSelected, whatThePlayerHasSelected );
  console.log(winner);
});

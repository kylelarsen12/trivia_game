//Obtain user name
let userName = window.prompt("Please enter your name: ");
let playAgain = true;

//game
function playGame() {
  let userScore = 0;
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let userAnswer = window.prompt(questions[i].text);

    if (userAnswer === question.correctAnswer) {
      userScore += 10;
    }
  }

  window.alert(`Congratulations ${userName} your score is: ${userScore}`);
}

while (playAgain === true) {
  playGame();
  let replay = window.prompt("Would you like to play again? Enter yes or no: ");
  if (replay === "yes" || replay === "Yes") {
    playAgain = true;
  } else {
    playAgain = false;
    window.alert("Thanks for playing!");
  }
}

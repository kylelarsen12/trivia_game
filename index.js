//Obtain user name
let userName = window.prompt("Please enter your name: ");

//Ask Questions
let userScore = 0;
for (let i = 0; i < questions.length; i++) {
  let question = questions[i];
  let userAnswer = window.prompt(questions[i].text);

  if (userAnswer === question.correctAnswer) {
    userScore += 10;
  }
}

window.alert(`Your score is: $(userScore)`);

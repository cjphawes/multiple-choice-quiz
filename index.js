// VARIABLES

//Get the DOM HTML Elements
let quizContainer = document.getElementById("quiz-container");
let startQuiz = document.getElementById("play-btn");
let correctAnswersDiv = document.getElementById("correct-answers-container");
let correctAnswers = document.getElementById("correct-answers");
let wrongAnswersDiv = document.getElementById("wrong-answers-container");
let wrongAnswers = document.getElementById("wrong-answers");
let nextRound = document.getElementById("next-round");
let nextRoundDiv = document.getElementById("next-round-container");
let tryAgain = document.getElementById("restart-quiz");
let tryAgainDiv = document.getElementById("restart-quiz-container");

//Q&A Variable that is an Object, created with 4 properties
let questionAndAnswer = [
  {
    round: 1,
    question: "What is the capital of Thailand?",
    options: ["Laos", "Bangkok", "Chiang Mai", "Phnom Penh"],
    correctAnswer: "Bangkok",
  },
  {
    round: 2,
    question: "Who became the Canadian Prime Minister in 2015?",
    options: [
      "Boris Johnson",
      "Donald Trump",
      "Justin Trudeau",
      "Stephen Harper",
    ],
    correctAnswer: "Justin Trudeau",
  },
  {
    round: 3,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["Brazil", "United Kingdom", "Russia", "Japan"],
    correctAnswer: "Brazil",
  },
  {
    round: 4,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Red Sea", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    round: 5,
    question: "Which famous scientist formulated the theory of relativity?",
    options: [
      "Stephen Hawking",
      "Albert Einstein",
      "Issac Newton",
      "Thomas Edison",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    round: 6,
    question: "What is the name of the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Neptune", "Jupiter"],
    correctAnswer: "Jupiter",
  },
];

//Variables for new round heading

//Variables for new questions
let newQuestion = document.createElement('p');
newQuestion.textContent = 

//Variables for new x4 answers
let newAnswers = document.createElement('');

//Variables for correct/incorrect answers
let numOfCorrectAnswers = 0;
let numOfWrongAnswers = 0;

// EVENT LISTENERS

//Get the play btn and create event listener, running the function displayRoundOne
startQuiz.addEventListener("click", displayRoundOne);

//Get the next btn and create event listener, displaying the next round
nextRound.addEventListener("click", displayRoundTwo);
nextRound.addEventListener("click", displayRoundThree);
nextRound.addEventListener("click", displayRoundFour);
nextRound.addEventListener("click", displayRoundFive);
nextRound.addEventListener("click", displayRoundSix);
nextRound.addEventListener("click", displayQuizResults);
/**
 *Get the restart btn and create event listener, returns back to the start of the quiz with the play btn
 */
tryAgain.addEventListener("click", () => {
  hideElements();
  returnToStart();
});

/**
 *Hides the correct and incorrect scores and btns for the user
 */
function hideElements() {
  correctAnswersDiv.style.display = "none";
  wrongAnswersDiv.style.display = "none";
  tryAgainDiv.style.display = "none";
  nextRoundDiv.style.display = "none";
}

// function checkAnswer() {}!!!
// function incrementScore() {}!!!

//START QUIZ
hideElements();

/**
 *Displays the first round of the quiz, removing the play button and displaying the first
 *question, 4 answers, next button and round 1 title.
 */
function displayRoundOne(event) {
  console.log("Round 1! Here we go!");
  //on click make play btn disappear and empty the quiz container
  startQuiz.style.display = "none";
  quizContainer.innerHTML = "";

  correctAnswers.textContent = numOfCorrectAnswers;
  wrongAnswers.textContent = numOfWrongAnswers;
}

//START SECOND ROUND
/**
 *Displays the second round of the quiz, removing the first round and displaying the second
 *question, 4 answers, next button, previous button and round 2 title.
 */
function displayRoundTwo(event) {
  console.log("Round 2! Good luck!");
}

/**
 *Displays the third round of the quiz, removing the second round and displaying the third
 *question, 4 answers, next button, previous button and round 3 title.
 */
function displayRoundThree(event) {
  console.log("Round 3! Halfway!");
}

/**
 *Displays the fourth round of the quiz, removing the third round and displaying the fourth
 *question, 4 answers, next button, previous button and round 4 title.
 */
function displayRoundFour(event) {
  console.log("Round 4! Great job so far!");
}

/**
 *Displays the fifth round of the quiz, removing the fourth round and displaying the fifth
 *question, 4 answers, next button, previous button and round 5 title.
 */
function displayRoundFive(event) {
  console.log("Round 5! Almost finished!");
}

/**
 *Displays the sixth round of the quiz, removing the fifth round and displaying the sixth
 *question, 4 answers, next button, previous button and round 6 title.
 */
function displayRoundSix(event) {
  console.log("Round 6! Final question!");
}

/**
 *Displays the quiz results round of the quiz, removing the sixth round and displaying the
 *total out of 6 questions how many the user got correct.
 */
function displayQuizResults(event) {
  console.log("Results time!");
  /**
   *Displays the correct answers to the user
   */
  function showCorrectAnswers() {
    correctAnswersDiv.style.display = "block";
    tryAgainDiv.style.display = "block";
  }
}

/**
 *Returns back to the home screen with the play btn
 */
function returnToStart() {
  startQuiz.style.display = "block";
  correctAnswers = 0;
  wrongAnswers = 0;
  hideElements();
}

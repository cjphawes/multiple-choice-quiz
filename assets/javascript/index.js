//VARIABLES

//Grabbing the container elements and setting their variables
let welcomeContainer = document.getElementById("welcome-container");
let gameContainer = document.getElementById("game-container");
let resultsContainer = document.getElementById("results-container");
//Grabbing the answer boxes and setting a variable for event listener for users click
let subContainers = document.getElementsByClassName("answers-sub-container");
//Grabbing the play btn and setting it a variable for event listener to start the game
let playBtn = document.getElementById("play-btn");
//Q&A Variable that is an Object, created with 4 properties in order
let questionAndAnswer = [
  {
    question: "What is the capital of Thailand?",
    options: ["Laos", "Bangkok", "Chiang Mai", "Phnom Penh"],
    correctAnswer: "Bangkok",
  },
  {
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
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["Brazil", "United Kingdom", "Russia", "Japan"],
    correctAnswer: "Brazil",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Red Sea", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
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
    question: "What is the name of the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Neptune", "Jupiter"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the world's largest desert?",
    options: ["Arctic", "Antarctica", "Sahara", "Arabian"],
    correctAnswer: "Antarctica",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Leonardo DiCaprio",
      "Pablo Picasso",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "In which year did the Titanic sink?",
    options: [
      "12th April 1915",
      "7th January 1902",
      "15th April 1912",
      "11th May 1922",
    ],
    correctAnswer: "15th April 1912",
  },
  {
    question:
      "What country is known for exporting some of the sweetest Mangoes in the world",
    options: ["Thailand", "Puerto Rico", "Mexico", "Philippines"],
    correctAnswer: "Philippines",
  },
];
//Variable for shuffled questions undefined enabling us to define inside the function startQuiz
let shuffledListOfQuestionAndAnswers;
//Grabbing the question <p> element for setting the question
let questionElement = document.getElementById("question");

////Setting up welcome container before starting the game
//Hiding the game container and results container from page load
gameContainer.style.display = "none";
resultsContainer.style.display = "none";
//Resetting Temp Variables back to original numbers
let currentQuestionIndex = 0;
let currentRound = 0;
let correctAnswers = 0;
let maxNumOfQuestions = 10;

//// EVENT LISTENERS

//Get the play btn and create event listener, running the function displayRoundOne
playBtn.addEventListener("click", startQuiz);

/**
 *This function will be used to start the game on the user click, it will hide the welcome container
 *and show the game container, whilst shuffling and displaying the first question set.
 */
function startQuiz() {
  //Hide the welcome container
  welcomeContainer.style.display = "none";
  console.log("welcome container hidden");
  //Run the function for shuffling the question set
  function shuffleQuestions() {
    shuffledListOfQuestionAndAnswers = questionAndAnswer.sort(() =>
      Math.floor(Math.random() - 0.5)
    );
    console.log("questions shuffled!");
  }
  //Show game container
  gameContainer.style.display = "block";
  console.log("game container shown");
  //Run the function for displaying the first question
  makeNewQuestionAndAnswer();
}

function makeNewQuestionAndAnswer() {
  displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
  //Enable the answers for clicking by user
  subContainers.disabled = false;
  console.log("answers enabled");
  //Add 1 on to current round
  currentRound++;
}

function displayQuestion(question) {
  questionElement.textContent = question.question;
}

let nextRound = document.getElementById("next-round");
let tryAgain = document.getElementById("restart-quiz");

// //Get the next btn and create event listener, displaying the next round
// nextRound.addEventListener("click", displayRoundTwo);
// nextRound.addEventListener("click", displayRoundThree);
// nextRound.addEventListener("click", displayRoundFour);
// nextRound.addEventListener("click", displayRoundFive);
// nextRound.addEventListener("click", displayRoundSix);
// nextRound.addEventListener("click", displayQuizResults);
// /**
//  *Get the restart btn and create event listener, returns back to the start of the quiz with the play btn
//  */
// tryAgain.addEventListener("click", () => {
//   hideElements();
//   returnToStart();
// });

// /**
//  *Hides the correct and incorrect scores and btns for the user
//  */
// function hideElements() {
//   correctAnswersDiv.style.display = "none";
//   wrongAnswersDiv.style.display = "none";
//   tryAgainDiv.style.display = "none";
//   nextRoundDiv.style.display = "none";
// }

// // function checkAnswer() {}!!!
// // function incrementScore() {}!!!

// //START QUIZ
// hideElements();

// function startQuiz() {
//   welcomeContainer
// }
// /**
//  *Displays the first round of the quiz, removing the play button and displaying the first
//  *question, 4 answers, next button and round 1 title.
//  */
// function displayRoundOne(event) {
//   console.log("Round 1! Here we go!");
//   //on click make play btn disappear and empty the quiz container
//   startQuiz.style.display = "none";
//   quizContainer.innerHTML = "";

//   correctAnswers.textContent = numOfCorrectAnswers;
//   wrongAnswers.textContent = numOfWrongAnswers;
// }

// //START SECOND ROUND
// /**
//  *Displays the second round of the quiz, removing the first round and displaying the second
//  *question, 4 answers, next button, previous button and round 2 title.
//  */
// function displayRoundTwo(event) {
//   console.log("Round 2! Good luck!");
// }

// /**
//  *Displays the third round of the quiz, removing the second round and displaying the third
//  *question, 4 answers, next button, previous button and round 3 title.
//  */
// function displayRoundThree(event) {
//   console.log("Round 3! Halfway!");
// }

// /**
//  *Displays the fourth round of the quiz, removing the third round and displaying the fourth
//  *question, 4 answers, next button, previous button and round 4 title.
//  */
// function displayRoundFour(event) {
//   console.log("Round 4! Great job so far!");
// }

// /**
//  *Displays the fifth round of the quiz, removing the fourth round and displaying the fifth
//  *question, 4 answers, next button, previous button and round 5 title.
//  */
// function displayRoundFive(event) {
//   console.log("Round 5! Almost finished!");
// }

// /**
//  *Displays the sixth round of the quiz, removing the fifth round and displaying the sixth
//  *question, 4 answers, next button, previous button and round 6 title.
//  */
// function displayRoundSix(event) {
//   console.log("Round 6! Final question!");
// }

// /**
//  *Displays the quiz results round of the quiz, removing the sixth round and displaying the
//  *total out of 6 questions how many the user got correct.
//  */
// function displayQuizResults(event) {
//   console.log("Results time!");
//   /**
//    *Displays the correct answers to the user
//    */
//   function showCorrectAnswers() {
//     correctAnswersDiv.style.display = "block";
//     tryAgainDiv.style.display = "block";
//   }
// }

// /**
//  *Returns back to the home screen with the play btn
//  */
// function returnToStart() {
//   startQuiz.style.display = "block";
//   correctAnswers = 0;
//   wrongAnswers = 0;
//   hideElements();
// }

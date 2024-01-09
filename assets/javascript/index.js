//VARIABLES
const questionAndAnswer = [
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
    question: "What date did the Titanic sink?",
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
      "What country is known for exporting some of the sweetest Mangoes in the world?",
    options: ["Thailand", "Puerto Rico", "Mexico", "Philippines"],
    correctAnswer: "Philippines",
  },
];

const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
//Grabbing the answer btn and setting the variable
const btnContainers = document.getElementsByClassName("answers-sub-container");
const playBtn = document.getElementById("play-btn");
//Variable for shuffled questions undefined enabling us to define inside the function startQuiz
let shuffledListOfQuestionAndAnswers;
//Grabbing the round number element for setting the round number
const roundNumber = document.getElementById("round-number");
//Grabbing the question <p> element for setting the question
const questionElement = document.getElementById("question");
//Grabbing btn elements for next question and restarting the quiz
const nextRoundBtn = document.getElementById("next-round-btn");
const restartBtn = document.getElementById("restart-quiz");
//Grabbing the results container text variables
const endQuizTitle = document.getElementById("encouragement-title");
let correctAnswers = document.getElementById("correct-answers");
const scoreText = document.getElementById("score-text");

//// EVENT LISTENERS

/*
 *This function will be used to start the quiz on user click
 */
playBtn.addEventListener("click", startQuiz);

//Run a for loop through the answer buttons
for (let i = 0; i < btnContainers.length; i++) {
  /*
   *This function will be used to add the class selected to the answer button clicked, set the chosenAnswer variable
   *and run the nextBtnEnable function
   */
  btnContainers[i].addEventListener("click", () => {
    btnContainers[i].classList.add("selected");
    chosenAnswer = btnContainers[i].textContent;
    nextBtnEnable();
  });
}

/*
 *This function will be used to run the functions checkAnswer, displayQuestion and increase the question index
 */
nextRoundBtn.addEventListener("click", () => {
  checkAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledListOfQuestionAndAnswers.length) {
    displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
  }
});

/*
 *This function will be used to restart the quiz on user click
 */
restartBtn.addEventListener("click", restartQuiz);

////WELCOME CONTAINER SET-UP
gameContainer.classList.add("hide");
resultsContainer.classList.add("hide");
//Setting Temp Variables to original numbers
let currentQuestionIndex = 0;
let currentRound = 0;
correctAnswers = 0;
let maxNumOfQuestions = 10;
let chosenAnswer = "";

////FUNCTIONS

//START OF QUIZ

/**
 *This function will be used to start the game on user click, it will hide the welcome container
 *and show the game container, whilst shuffling and displaying the first question set.
 */
function startQuiz() {
  welcomeContainer.classList.add("hide");
  shuffleQuestions();
  gameContainer.classList.remove("hide");
  displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
}

/**
 *Used to shuffled the question and answer set for randomized population of questions
 */
function shuffleQuestions() {
  for (let i = questionAndAnswer.length - 1; i > 0; i--) {
    let randomQuestion = Math.floor(Math.random() * (i + 1));
    let temp = questionAndAnswer[i];
    questionAndAnswer[i] = questionAndAnswer[randomQuestion];
    questionAndAnswer[randomQuestion] = temp;
  }
  shuffledListOfQuestionAndAnswers = questionAndAnswer;
  return;
}

/**
 *Displays the next question in the shuffled list of questions, with associated answers, enabling
 *the answer buttons and updating the round number.
 */
function displayQuestion(questionAndAnswer) {
  currentRound++;
  //Update the round number inner text
  roundNumber.textContent = currentRound;
  // Update the question text
  questionElement.textContent = questionAndAnswer.question;
  // Update each answer element with the corresponding options
  for (let i = 0; i < questionAndAnswer.options.length; i++) {
    btnContainers[i].textContent = questionAndAnswer.options[i];
    btnContainers[i].classList.remove("selected");
    btnContainers[i].disabled = false;
  }
}

/**
 * Checks if the answer clicked is correct or if the round is the last round,
 * if so, it will display the results container
 */
function checkAnswer() {
  //Get the correct answer from the shuffled list of questions
  let correctAnswer =
    shuffledListOfQuestionAndAnswers[currentQuestionIndex].correctAnswer;
  //Check if the answer clicked is the correct answer
  if (chosenAnswer === correctAnswer) {
    correctAnswers++;
  }
  //Check if the current round is the last round, if so, display the results
  if (currentRound === maxNumOfQuestions) {
    displayResults();
  }
  //Disable the next round btn
  nextRoundBtn.disabled = true;
  nextRoundBtn.style.opacity = "0.2";
  nextRoundBtn.style.border = "none";
  nextRoundBtn.style.color = "#000";
  nextRoundBtn.style.backgroundImage = "none";
  nextRoundBtn.style.backgroundColor = "#fff";
}

/**
 * Enables the next round btn and disables the answer buttons
 */
function nextBtnEnable() {
  nextRoundBtn.disabled = false;
  nextRoundBtn.style.opacity = "1";
  nextRoundBtn.style.color = "#fff";
  nextRoundBtn.style.border = "0.4rem solid #fff";
  nextRoundBtn.style.cursor = "pointer";
  nextRoundBtn.style.backgroundImage =
    "linear-gradient(to bottom right, #f8770f 20%, #e63010 80%)";
  //disable the answers from clicking
  for (let i = 0; i < btnContainers.length; i++) {
    btnContainers[i].disabled = true;
  }
}

/**
 * Restarts the quiz by resetting the temp variables and hiding the results container
 */
function restartQuiz() {
  //Reset the temp variables
  currentQuestionIndex = 0;
  currentRound = 0;
  correctAnswers = 0;

  resultsContainer.classList.add("hide");
  welcomeContainer.classList.remove("hide");
}

/**
 * Displays the results container, showing the users score and the restart btn
 */
function displayResults() {
  gameContainer.classList.add("hide");
  resultsContainer.classList.remove("hide");

  if (correctAnswers === 10) {
    endQuizTitle.textContent = "Perfect Score!";
    scoreText.textContent = `You scored ${correctAnswers} out of ${maxNumOfQuestions}`;
  } else if (correctAnswers >= 6) {
    endQuizTitle.textContent = "Wow you did great!";
    scoreText.textContent = `You scored ${correctAnswers} out of ${maxNumOfQuestions}`;
  } else if (correctAnswers >= 3) {
    endQuizTitle.textContent = "Someone needs to go back to school!";
    scoreText.textContent = `You scored ${correctAnswers} out of ${maxNumOfQuestions}`;
  } else if (correctAnswers < 3) {
    endQuizTitle.textContent = "You need to go back to school!";
    scoreText.textContent = `You scored ${correctAnswers} out of ${maxNumOfQuestions}`;
  }
  restartBtn.disabled = false;
}

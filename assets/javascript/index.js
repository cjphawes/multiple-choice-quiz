//VARIABLES
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
let btnContainers = document.getElementsByClassName("answers-sub-container");
const playBtn = document.getElementById("play-btn");
//Variable for shuffled questions undefined enabling us to define inside the function startQuiz
let shuffledListOfQuestionAndAnswers;
//Grabbing the round number element for setting the round number
let roundNumber = document.getElementById("round-number");
//Grabbing the question <p> element for setting the question
let questionElement = document.getElementById("question");
//Grabbing btn elements for next question and restarting the quiz
let nextRoundBtn = document.getElementById("next-round-btn");
let restartBtn = document.getElementById("restart-quiz");

////WELCOME CONTAINER SET-UP

//Hiding the game container and results container from page load
gameContainer.classList.add("hide");
resultsContainer.classList.add("hide");
//Resetting Temp Variables back to original numbers
let currentQuestionIndex = 0;
let currentRound = 0;
let correctAnswers = 0;
let maxNumOfQuestions = 10;
let chosenAnswer = "";

//// EVENT LISTENERS

//Get the play btn and create event listener, running the function displayRoundOne
playBtn.addEventListener("click", startQuiz);
//Run a for loop through the answer buttons
for (let i = 0; i < btnContainers.length; i++) {
  btnContainers[i].addEventListener("click", function () {
    btnContainers[i].style.backgroundColor = "#000";
    chosenAnswer = btnContainers[i].textContent;
    console.log(`You chose ${chosenAnswer}`);
    nextBtnEnable();
  });
}

//Get the next round btn and create event listener, running the function displayNextRound
nextRoundBtn.addEventListener("click", () => {
  checkAnswer();
  currentQuestionIndex++;
  displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
});

////FUNCTIONS
/**
 *Used to shuffled the question and answer set for randomized population of questions
 */
function shuffleQuestions() {
  for (let i = questionAndAnswer.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = questionAndAnswer[i];
    questionAndAnswer[i] = questionAndAnswer[j];
    questionAndAnswer[j] = temp;
  }
  shuffledListOfQuestionAndAnswers = questionAndAnswer;
  console.log("questions shuffled!");
  return;
}

/**
 *Displays the next question in the shuffled list of questions, with associated answers, enabling
 *the buttons to click on the answers and updating the round number.
 */
function displayQuestion(questionAndAnswer) {
  currentRound++;
  console.log(`Round ${currentRound}`);
  //Update the round number inner text
  roundNumber.textContent = currentRound;
  // Update the question text
  questionElement.textContent = questionAndAnswer.question;
  // Update each answer element with the corresponding options
  for (let i = 0; i < questionAndAnswer.options.length; i++) {
    btnContainers[i].textContent = questionAndAnswer.options[i];
    //Enable the answers for clicking by user
    btnContainers[i].disabled = false;
    btnContainers[i].style.backgroundColor = "#fff";
    console.log("answer enabled");
  }
}

/**
 *
 */
function checkAnswer() {
  //Get the correct answer from the shuffled list of questions
  let correctAnswer =
    shuffledListOfQuestionAndAnswers[currentQuestionIndex].correctAnswer;
  console.log(`The correct answer is ${correctAnswer}`);
  //Check if the answer clicked is the correct answer
  if (chosenAnswer === correctAnswer) {
    correctAnswers++;
    console.log(
      `You have ${correctAnswers} out of ${maxNumOfQuestions} so far!}`
    );
  } else {
    console.log("Wrong Answer!");
  }
  if (currentRound === maxNumOfQuestions) {
    console.log("Game Over");
    displayResults();
  }
  nextRoundBtn.disabled = true;
  // nextRoundBtn.style.backgroundColor = "inherit";
  // nextRoundBtn.style.color = "inherit";
  // nextRoundBtn.style.border = "inherit";
  console.log("next round btn disabled");
}

//enable the next round btn
function nextBtnEnable() {
  nextRoundBtn.disabled = false;
  nextRoundBtn.style.backgroundColor = "#000";
  nextRoundBtn.style.color = "#fff";
  nextRoundBtn.style.border = "10px solid #fff";
  console.log("next round btn enabled");
  //disable the answers from clicking
  for (let i = 0; i < btnContainers.length; i++) {
    btnContainers[i].disabled = true;
    console.log("answers disabled");
  }
}
//START OF QUIZ

/**
 *This function will be used to start the game on the user click, it will hide the welcome container
 *and show the game container, whilst shuffling and displaying the first question set.
 */
function startQuiz() {
  //Hide the welcome container
  welcomeContainer.style.display = "none"; // !important; //NEED TO CHANGE THIS
  //Run the function for shuffling the question set
  shuffleQuestions();
  //Show game container
  gameContainer.classList.remove("hide");
  //Run the function for displaying the first question
  displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
}

// // function restartQuiz() {}!!!

/**
 * Displays the results container, showing the users score and the restart btn
 */
function displayResults() {
  //Hide the game container
  gameContainer.classList.add("hide");
  console.log("Game container hidden");
  //Show the results container
  resultsContainer.classList.remove("hide");
  console.log("Results container shown");
  //Update the score text
  document.getElementById(
    "score"
  ).textContent = `You scored ${correctAnswers} out of ${maxNumOfQuestions}!`;
  console.log("Score updated");
  //Disable the next round btn
  nextRoundBtn.disabled = true;
  console.log("next round btn disabled");
  //Enable the restart btn
  restartBtn.disabled = false;
  console.log("restart btn enabled");
}

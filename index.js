let startBtn = document.getElementById("play-btn");
let firstRound = document.getElementById("roundone-body");
let secondRound = document.getElementById("roundtwo-body");
let thirdRound = document.getElementById("roundthree-body");
let fourthRound = document.getElementById("roundfour-body");
let fifthRound = document.getElementById("roundfive-body");
let sixthRound = document.getElementById("roundsix-body");
let quizResults = document.getElementById("quizresults-body");
firstRound.innerHTML = roundOne;
/**
 *Displays the first round of the quiz, removing the play button and displaying the first
 *question, 4 answers, next button and round 1 title.
 */
function displayRoundOne(event) {
  console.log("Round 1! Here we go!");
  startBtn.style.display = "none";
}

///Home Screen Variables

///Play Btn Event Listener
startBtn.addEventListener("click", displayRoundOne);

// ///Round 1 Variables
// let roundTwo = createRoundTwo();

// ///Round 2 Variables
// let roundThree = createRoundThree();

// ///Round 3 Variables
// let roundFour = createRoundFour();

// ///Round 4 Variables
// let roundFive = createRoundFive();

// ///Round 5 Variables
// let roundSix = createRoundSix();

// ///Round 6 Variables
// let quizTotal = createQuizResults();

//ADD EVENT LISTENERS HERE
///Home Screen Event Listeners
startBtn.addEventListener("click", displayRoundOne);

//CHANGE ROUND FUNCTIONS

/**
 *Displays the second round of the quiz, removing the first round and displaying the second
 *question, 4 answers, next button, previous button and round 2 title.
 */
function displayRoundTwo() {
  console.log("Round 2! Good luck!");
  roundOne.style.display = "none";
}

/**
 *Displays the third round of the quiz, removing the second round and displaying the third
 *question, 4 answers, next button, previous button and round 3 title.
 */
function displayRoundThree() {
  console.log("Round 3! Halfway!");
}

/**
 *Displays the fourth round of the quiz, removing the third round and displaying the fourth
 *question, 4 answers, next button, previous button and round 4 title.
 */
function displayRoundFour() {
  console.log("Round 4! Great job so far!");
}

/**
 *Displays the fifth round of the quiz, removing the fourth round and displaying the fifth
 *question, 4 answers, next button, previous button and round 5 title.
 */
// function displayRoundFive() {}
// console.log("Round 5! Almost finished!");

/**
 *Displays the sixth round of the quiz, removing the fifth round and displaying the sixth
 *question, 4 answers, next button, previous button and round 6 title.
 */
function displayRoundSix() {
  console.log("Round 6! Final question!");
}

/**
 *Displays the quiz results round of the quiz, removing the sixth round and displaying the
 *total out of 6 questions how many the user got correct.
 */
function displayQuizResults() {
  console.log("Results time!");
}

function checkAnswer() {}
function incrementScore() {}
function calculateCorrectAnswer() {}
function createRoundOne() {
  let html = `
  <!--Main Section-->
  <div>
    <div class="number-and-question">
      <span class="round" id="round-one">Round 1</span>
      <p class="question" id="question-one">
        What is the capital of Thailand?
      </p>
    </div>
    <!--4 Boxes With Answers-->
    <section id="answers-container">
      <div id="answers-container-1">
        <h2 class="answer-title">Laos</h2>
      </div>
      <div id="answers-container-2">
        <h2 class="answer-title">Bangkok</h2>
      </div>
      <div id="answers-container-3">
        <h2 class="answer-title">Chiang Mai</h2>
      </div>
      <div id="answers-container-4">
        <h2 class="answer-title">Phnom Penh</h2>
      </div>
    </section>
    <!--Next Question Link-->
    <div id="next-question">
      <a href="roundtwo.html" id="next-question-link">Next Question</a>
    </div>
  </div>`;

  return html;
}

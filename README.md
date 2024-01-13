![image of game title and background](/documentation-assets/doc-imgs/game-title.webp)

# TriviaX

**Hello Fellow Coders**!

Welcome to TriviaX, an online general knowledge quiz, testing the users IQ to the max!

The websites aim is to provide a somewhat challenging quiz to entertain online users. The questions are from a variety of categories and aren't specifically aimed at anyone or any subject in particular. There are 10 questions in total.

Have a go and see if you can guess all the questions correctly! [TriviaX](https://cjphawes.github.io/multiple-choice-quiz/)

Take a quick glance at my online quiz on a variety on device screen widths.

![a variety of screen widths of my online quiz](/documentation-assets/doc-imgs/am-i-responsive-devices.webp)

Am I Responsive [Webpage](https://ui.dev/amiresponsive?url=https://cjphawes.github.io/multiple-choice-quiz/)

---

## The Rules!

My game is simple.

**1.** 10 Questions, select `Play Now` when you are ready to start.
**2.** One guess per round (don't click the wrong one;)
**3.** Click `Next Question` when you are ready to move on.
**4.** See how bad you are at general knowledge at the end :)

## The Process

#### Javascript Flowchart

- This flowchart shows the logic and flow of the game.

![flowchart of how the game is run](/documentation-assets/doc-imgs/js-flowchart-for-quiz.webp)

#### HTML & CSS Wireframe Layout

- This design is very similar to my final layout structure with a few minor changes such as:
  - Words of encouragement below the score out of 10 in the results container.
  - I added a background image rather than using a color.
  - Made edges of boxes rounded and removed the line underneath the question.
  - I added a footer to the HTML for copyright purposes

![wireframe of my quiz layout](/documentation-assets/doc-imgs/home-screen-container-wf.webp)
![wireframe of my quiz layout](/documentation-assets/doc-imgs/game-container-wf.webp)
![wireframe of my quiz layout](/documentation-assets/doc-imgs/results-container-wf.webp)

---

### User Stories

#### First Time Visitor Goals

- As a first time user, I want to be able to play a fun, interactive game that will entertain me.
- As a first time user, I would like to trial my general knowledge to see how much I know.

#### Returning Visitor Goals

- As a returning user, I would like to achieve a higher score than before competing for the best score possible.
- As a returning user, I want to expand my general knowledge.

#### Frequent Visitor Goals

- As a frequent user, I would like to have the option of choosing a variety of quizzes in different subject areas.
- As a frequent user, I would love to play and compete against my friends and family or random users.

---

### Features

There are three container elements inside the HTML structure:

- The [Welcome container](#home-page), displaying the button to start the game.
- The [Game container](#the-quiz---before-selection), displaying the actual quiz elements that the user will interact with.
- The [Results container](#the-results), displaying the users final results of their game, with the option of restarting if wishing too.

#### Home Page

![image of home page](/documentation-assets/doc-imgs/home-page.webp)

- The home page shows:

  - The main goal of the application.
  - A simple interactive method of use for anyone to understand.

- The home page includes:
  - A call to action button, the user clicks to initiate the game. Upon hovering over the CTA button, the styling will change to a gradient background.
  - The quiz's title, which is also a hyperlink that sends you back to the home page when clicked on.
  - A footer for copyright purposes.

#### The Quiz - Before Selection

![image of main game section before selection](/documentation-assets/doc-imgs/main-game-section-before-selection.webp)

- Once the user enters the game and they will come across:

  - A question that has been shuffled from a list of questions.
  - Four answer options associated to the question.
  - A next question CTA button that is automatically disabled to not allow the user to skip a question.
  - The round number the user is currently on.

#### The Quiz - After Selection

![image of main game section after selection](/documentation-assets/doc-imgs/main-game-section-after-selection.webp)

- The user interacts by clicking on the answer box they think is correct, this will:
  - Disable the other answers
  - Visually tell the user which answer they chose by styling it all black with white text.
  - Highlight the next question CTA button in a gradient color, subtly directing them where to click to continue the game.

#### The Results

![image of results section](/documentation-assets/doc-imgs/game-results-section.webp)

- Once all questions have been answered, the results will appear and display:
  - The user's score out of 10.
  - Provide some words of encouragement to try again to get a better score (unless you get 100%)
  - A CTA button for the user to restart the quiz. Upon hovering over the CTA button, the styling will change to a gradient background.

#### Future Features To Implement

- Option to select a category/subject to quiz the user, rather than just general knowledge.
- Add the input for a username on the home page, to make user more engaged and feel more connected to the quiz.
- Add a leaderboard to the results page to give the game a competitive nature allowing users to battle against each other.

---

## Testing

Please refer to [TESTING.md](/TESTING.md) file for all test-related documentation.

#### Solved Bugs

- **Issue 1:** The background image for the quiz wasn't being displayed when deploying the website.
  - **Solution:** I corrected the file path address for the image due to it starting in the wrong folder.
- **Issue 2:** When trying to hide the welcome container on click of the play button CTA, it wasn't hiding.
  - **Solution:** I added `!important` to the css styling of the class `.hide`
- **Issue 3:** The `textContent setting of null` error was being shown on the display of the results container.
  - **Solution:** I had not realised i removed the `encouragement-text` line of code in the HTML so removing these lines of code in the JS removed the error.
- **Issue 4:** I was getting another error on the display of the results container showing, "unable to read property of `.question`.
  - **Solution:** The fix for this was adding an IF statement to the `nextRoundBtn` function
- **Issue 5:** The elements on the page were shifting around when hovering on the restart quiz button and when selecting an answer.
  - **Solution:** I set a fixed height to the button elements so that the shift will no longer occur.

#### Unsolved Bugs

- None.

#### Mistakes

There were seven mistakes were made while committing messages to Github.

- **20a1b29** - "remove validator testing and put on TESTING.md file"

**_Supposed to be:_** "docs:remove validator testing and put on TESTING.md file"

- **714e319** - "remove png and webp versions of imgs"

**_Supposed to be:_** "maint:remove png and webp versions of imgs"

- **1e1727d** - "change btn vars to const, restructure code semantically"

**_Supposed to be:_** "feat:change btn vars to const, restructure code semantically"

- **98162ad** - "add comments, remove seven div elements"

**_Supposed to be:_** "feat:add comments, remove seven div elements"

- **b821061** - "style:change units to vw for resutls container"

**_Supposed to be:_** style:change units to vw for results container"

- **4ebc713** - "style:change styling of resutls container and bg image"

**_Supposed to be:_** "style:change styling of results container and bg image"

- **6994066** - "style:change margins of main contianers, comment out some media Q's"

**_Supposed to be:_** "style:change margins of main containers, comment out some media Q's"

---

## Deployment

The website was deployed to Github Pages.

To do so , I followed these steps.

**1.** From the website Github repository, navigate to the **Settings** tab.
**2.** Make sure your default branch is set to `main`, in the left-hand side drop down menu, under **Code and Automation**, select the **Pages** tab.
**3.** Make sure the branch selected is `main`, and upon a refresh of the page, at the top of the page automatically,a link will populate detailing your live web address.

The live link can be found here - [TriviaX](https://cjphawes.github.io/multiple-choice-quiz/)

## Local Deployment

To make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/cjphawes/multiple-choice-quiz.git`

Alternatively, if you use Gitpod, you can [click here](https://gitpod.io/new#https://github.com/cjphawes/multiple-choice-quiz), which will start Gitpod workspace for you.

---

## Credits

##### Content

- All the questions were created using [Chat GPT](https://chat.openai.com/auth/login?sso)
- The Favicon icon was made using [Favicon](https://favicon.io/favicon-generator/)
- The code used for the sticky footer was from [Materialize CSS](https://materializecss.com/footer.html)
- The footer copyright logo was found from [CSS Tricks](https://css-tricks.com/snippets/html/glyphs/)
- The code used for shuffling the question set i created was the [Fisher-Yates Algorithm](https://stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array)
- The code used for the automatic font scaling is from [Automatic font scaling](https://sjorswijsman.medium.com/3-easy-css-tricks-for-responsive-websites-i-use-in-every-project-68ec334a1522)

##### Media

- The background image used throughout the whole quiz is from [Unsplash](https://unsplash.com/photos/open-book-lot-Oaqk7qqNh_c)
- The images, including inside this README, were all compressed using [Image Resizer](https://imageresizer.com/)
- The GIFs created for the demonstration of testing was used with [Chrome Capture Extension](https://chromewebstore.google.com/detail/chrome-capture-gif-screen/ggaabchcecdbomdcnbahdfddfikjmphe) on Google Chrome

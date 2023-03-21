[DEPLOY](https://song-bird-js-game.netlify.app/)

Project Description:

Application Structure:

Start Page
Quiz Page
Results Page
Start Page:

The Start Page sets the overall impression of the application.
There is navigation to the Quiz Page and Results Page.
Quiz Page:

The Quiz Page consists of four blocks:
Top panel, contains the list of questions and current score of the game
Block with the current question, contains an audio player with bird voice recording and blanks in place of bird name and image. When the player selects the correct answer, the name and image of the bird whose voice was heard are displayed in the block.
Block with answer options, contains a list with the names of six different birds
Block with bird description, contains an invitation to listen to the player and choose a bird from the list. When the player selects an answer option, data about the selected bird is displayed in the block: image, Polish and Latin names, voice recording, brief information.
Results Page:

Displayed after completing the quiz, shows the points earned during the game.
The player is offered to take the quiz again. There is a button that redirects to the beginning of the game.
Game Mechanism:

The bird in the question block is selected randomly.
When the player clicks on an answer option with the bird name, information about it is displayed in the bird description block.
If the player selects the correct answer, the name and image of the bird are displayed in the question block.
At the beginning of the game, the score is 0. If the player gives the correct answer on the first attempt, their score is increased by 5 points. Each subsequent attempt gives one less point, and if the correct answer is given only on the last, sixth attempt, the player receives 0 points. The points for all questions are summed.
Sound and color indications are used for correct and incorrect player answers.
When the player gives the correct answer, the "Next" button is activated, and they can move on to the next question.
After the last question, the Results Page is displayed.
Repository Requirements:

Commit history should reflect the application development process.
Technical Requirements:

The application should work in the latest version of the Google Chrome browser.
CSS preprocessors can be used.
The use of any js libraries is prohibited.
Code Writing Recommendations:

Use Prettier to format the code.
Avoid code duplication.
ES6 and higher features.
JS code modules.
Async/await.
Webpack.
Layout Requirements:

Responsive layout. The correctness of the application display is checked on a screen width of 1920px to 360px.
Interactive elements with which users can interact. Changes in the appearance of the element and the cursor state when hovering. Use different styles for the active and inactive states of the element.

import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";
import birdsInCategory from "./js/birdsInCategory";

let categoryCount = 0;
let score = 0;

window.addEventListener("load", () => showNewQuestion(categoryCount, dataBase));

function showNewQuestion(categoryCount, dataBase) {
  const audioPlayerEl = document.querySelector(".audio-player");
  const optionsEl = document.querySelectorAll("[name='option']");

  const incognitoBird = randomBirdInCategory(categoryCount, dataBase);
  const birds = birdsInCategory(categoryCount, dataBase);
  createQuestionPlayer(audioPlayerEl, incognitoBird.audio, "audio-player");

  optionsEl.forEach((el, i) => {
    el.setAttribute("value", birds[i].name);
    el.nextElementSibling.append(birds[i].name);
    el.addEventListener("click", (e) => chooseBird(e, incognitoBird));
  });
}

function chooseBird(e, incognitoBird) {
  const chooseBird = e.target.value;
  if (incognitoBird.name === chooseBird) {
    console.log(chooseBird);
    // TODO: show info about bird, show name on top, add score, add sound, add animation(green color)
  } else {
    // TODO: show info about bird, add sound, add animation (red color)
  }
}

function addScore() {}

// const nextLevelBtn = document.querySelector(".next-level-btn");
// nextLevelBtn.addEventListener("click", goToNextLevel);

// function goToNextLevel() {
// remove eventListeners
//   categoryCount++;
//   showNewQuestion(categoryCount, dataBase);
// }

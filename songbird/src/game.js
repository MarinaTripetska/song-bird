import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";
import birdsInCategory from "./js/birdsInCategory";
import createAnswerDesc from "./js/createAnswerDesc";

let categoryCount = 0;
let score = 0;

window.addEventListener("load", () => showNewQuestion(categoryCount, dataBase));

function showNewQuestion(categoryCount, dataBase) {
  const audioPlayerEl = document.querySelector(".quiz__audio-player");
  const optionsEl = document.querySelectorAll("[name='option']");

  const incognitoBird = randomBirdInCategory(categoryCount, dataBase);
  const birds = birdsInCategory(categoryCount, dataBase);
  createQuestionPlayer(audioPlayerEl, incognitoBird.audio, "audio-player");

  optionsEl.forEach((el, i) => {
    el.setAttribute("value", birds[i].name);
    el.nextElementSibling.append(birds[i].name);
    el.addEventListener("click", (e) => chooseBird(e, incognitoBird, birds));
  });
}

function chooseBird(e, incognitoBird, birds) {
  const chooseBirdName = e.target.value;
  const chooseBird = birds.find((bird) => bird.name === chooseBirdName);

  const htmlTemplate = createAnswerDesc(chooseBird);
  const descThumb = document.querySelector(".answer__description.description");
  descThumb.innerHTML = htmlTemplate;

  const smallAudioEl = descThumb.querySelector(".answer-audio");
  let audio = createQuestionPlayer(
    smallAudioEl,
    chooseBird.audio,
    "audio-player"
  );
  // TODO: delete previous audio

  if (incognitoBird.name === chooseBirdName) {
    const winAudio = new Audio("./assets/audio/smart.mp3");
    winAudio.play();
    // TODO:  show name on top, add score, add sound, add animation(green color)
  } else {
    const winAudio = new Audio("./assets/audio/click.mp3");
    winAudio.play();
    // TODO: add sound, add animation (red color)
  }
}

// function addScore() {}

// const nextLevelBtn = document.querySelector(".next-level-btn");
// nextLevelBtn.addEventListener("click", goToNextLevel);

// function goToNextLevel() {
// remove eventListeners
//   categoryCount++;
//   showNewQuestion(categoryCount, dataBase);
// }

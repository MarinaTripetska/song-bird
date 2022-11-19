import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";
import birdsInCategory from "./js/birdsInCategory";
import createAnswerDesc from "./js/createAnswerDesc";

const audioPlayerEl = document.querySelector(".quiz__audio-player");
const optionsEl = document.querySelectorAll("[name='option']");
const descThumb = document.querySelector(".answer__description.description");
const birdNameEl = document.querySelector(".quiz__question-name");
const birdImgEl = document.querySelector(".quiz__img");

let categoryCount = 0;
let score = 0;

window.addEventListener("load", () => showNewQuestion(categoryCount, dataBase));

function showNewQuestion(categoryCount, dataBase) {
  const incognitoBird = randomBirdInCategory(categoryCount, dataBase);
  const birds = birdsInCategory(categoryCount, dataBase);
  createQuestionPlayer(audioPlayerEl, incognitoBird.audio, "audio-player");

  optionsEl.forEach((el, i) => {
    el.setAttribute("value", birds[i].name);
    el.nextElementSibling.append(birds[i].name);
    el.addEventListener("click", (e) =>
      chooseBird(e, incognitoBird, birds, el)
    );
  });
}

function chooseBird(e, incognitoBird, birds) {
  // let scoreInSection = birds.length;
  // console.log(scoreInSection);
  const chooseBirdName = e.target.value;
  const chooseBird = birds.find((bird) => bird.name === chooseBirdName);

  const htmlTemplate = createAnswerDesc(chooseBird);
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
    birdNameEl.textContent = chooseBirdName;
    birdImgEl.src = chooseBird.image;

    // TODO: add score, add animation(green color)
  } else {
    const winAudio = new Audio("./assets/audio/click.mp3");
    winAudio.play();
    // TODO: , add animation (red color)
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

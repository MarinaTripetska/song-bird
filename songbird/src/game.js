import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";
import birdsInCategory from "./js/birdsInCategory";
import createAnswerDesc from "./js/createAnswerDesc";

const audioPlayerEl = document.querySelector(".quiz__audio-player");
const formEl = document.querySelector(".options__form");

const descThumb = document.querySelector(".answer__description.description");
const birdNameEl = document.querySelector(".quiz__question-name");
const birdImgEl = document.querySelector(".quiz__img");
const nextLevelBtn = document.querySelector(".next-level-btn");
const scoreEl = document.querySelector(".header__score");

let categoryCount = 0;
let score = 0;
let isCorrect = false;
let questionAudio = new Audio();
let smallAudio = new Audio();
let isAudioPlayerCreated = false;
let scoreInSection = 5;

window.addEventListener("load", showNewQuestion);
nextLevelBtn.addEventListener("click", goToNextLevel);

async function showNewQuestion() {
  const incognitoBird = await randomBirdInCategory(categoryCount, dataBase);
  const birds = await birdsInCategory(categoryCount, dataBase);
  questionAudio.src = incognitoBird.audio;
  if (!isAudioPlayerCreated) {
    createQuestionPlayer(questionAudio, audioPlayerEl, "audio-player");
  }

  const optionsEl = document.querySelectorAll("[name='option']");
  optionsEl.forEach((el, i) => {
    el.setAttribute("value", birds[i].name);
    el.nextElementSibling.append(birds[i].name);
    el.addEventListener("click", (e) => chooseBird(e, birds, incognitoBird));
  });
}

async function chooseBird(e, birds, incognitoBird) {
  //stop prev bird song:
  if (smallAudio.src) {
    smallAudio.pause();
  }

  const chooseBirdName = e.target.value;
  const chooseBird = birds.find((bird) => bird.name === chooseBirdName);

  //create description
  const htmlTemplate = createAnswerDesc(chooseBird);
  descThumb.innerHTML = htmlTemplate;
  const smallAudioEl = descThumb.querySelector(".answer-audio");
  smallAudio.src = chooseBird.audio;
  createQuestionPlayer(smallAudio, smallAudioEl, "audio-player");

  if (incognitoBird.name === chooseBirdName) {
    if (!isCorrect) {
      //add audio:
      const winAudio = new Audio("./assets/audio/smart.mp3");
      winAudio.play();
      //show img and name in question section:
      birdNameEl.textContent = chooseBirdName;
      birdImgEl.src = chooseBird.image;
      //add green color:
      e.target.nextElementSibling.classList.add("correct");
      //stop questionAudio on correct answer:
      questionAudio.pause();
      //activate next level:
      nextLevelBtn.removeAttribute("disabled");
      //render score from prev quest
      console.log(scoreInSection);
      score += scoreInSection;
      scoreEl.querySelector("span").textContent = score;
    }

    isCorrect = true;
  } else {
    if (!isCorrect) {
      //add audio:
      const winAudio = new Audio("./assets/audio/click.mp3");
      winAudio.play();
      //add red color:
      e.target.nextElementSibling.classList.add("inCorrect");
      scoreInSection = --scoreInSection;
    }
  }
}

// function addScore() {}

function goToNextLevel() {
  nextLevelBtn.setAttribute("disabled", "");
  birdNameEl.textContent = "******";
  birdImgEl.src = "./assets/images/bird-question.png";
  questionAudio.src = "";
  isCorrect = false;
  scoreInSection = 5;

  //clean options:
  const optionsEl = document.querySelectorAll("[name='option']");
  optionsEl.forEach((el) => {
    el.nextElementSibling.textContent = "";
    el.nextElementSibling.classList.remove("correct");
    el.nextElementSibling.classList.remove("inCorrect");
    el.removeAttribute("checked");
  });
  //remove prev eventListeners
  formEl.replaceWith(formEl.cloneNode(true));
  //clean description
  descThumb.innerHTML = `<p class="description__info">
                          Listen to the player. Select a bird from the list
                        </p>`;

  ++categoryCount;

  showNewQuestion();
}

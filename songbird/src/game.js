import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";
import birdsInCategory from "./js/birdsInCategory";
import createAnswerDesc from "./js/createAnswerDesc";
import activateNextCategory from "./js/activateNextCategory";

const quizMainThumbOnStart = document.querySelector(".quiz-main-thumb");
const audioPlayerEl = document.querySelector(".quiz__audio-player");
const descThumb = document.querySelector(".answer__description.description");
const birdNameEl = document.querySelector(".quiz__question-name");
const birdImgEl = document.querySelector(".quiz__img");
const nextLevelBtn = document.querySelector(".next-level-btn");
const scoreEl = document.querySelector(".header__score");

let categoryCount = 5; //category count from 0 to 5
let score = 0; //main score
let isCorrect = false;
let questionAudio = new Audio();
let smallAudio = new Audio();
let isAudioPlayerCreated = false;
let scoreInSection = 5; //max points for correct answer

window.addEventListener("load", showNewQuestion);
nextLevelBtn.addEventListener("click", goToNextLevel);

function showNewQuestion() {
  const incognitoBird = randomBirdInCategory(categoryCount, dataBase);
  const birds = birdsInCategory(categoryCount, dataBase);
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

function chooseBird(e, birds, incognitoBird) {
  //stop prev bird song:
  if (smallAudio.src) {
    smallAudio.pause();
  }

  const chooseBirdName = e.target.value;

  const chooseBird = birds.find((bird) => {
    return bird.name === chooseBirdName;
  });

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

      score += scoreInSection;
      scoreEl.querySelector("span").textContent = score;
    }

    isCorrect = true;
    if (categoryCount === 5) {
      nextLevelBtn.textContent = "FINISH GAME";
      nextLevelBtn.style.backgroundColor = "green";
    }
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
    el.value = "";
    el.nextElementSibling.textContent = "";
    el.nextElementSibling.classList.remove("correct");
    el.nextElementSibling.classList.remove("inCorrect");
    el.removeAttribute("checked");
  });
  //remove prev eventListeners
  const formEl = document.querySelector(".options__form");
  formEl.replaceWith(formEl.cloneNode(true));
  //clean description
  descThumb.innerHTML = `<p class="description__info">
                          Listen to the player. Select a bird from the list
                        </p>`;

  ++categoryCount;
  if (categoryCount < 6) {
    showNewQuestion();
    activateNextCategory();
  } else {
    onFinishGameClick();
  }
}

function onFinishGameClick() {
  const quizMainThumb = document.querySelector(".quiz-main-thumb");
  quizMainThumb.innerHTML = `
    <div>
      <h1>Congratulations!</h1>
      <p>You passed the quiz and scored <span>${score}</span> out of <span>30</span> possible points</p>
     <a href="./index.html">Try again!</a>
    </div>
  `;
}


// TODO: button next level change color, text. before maybe modal with congrats? button provide on results page with scores from localstaroge. in modal we can ask about name for saving score
console.log("проверте пожалуйста в четверг :)");

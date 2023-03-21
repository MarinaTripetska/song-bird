import "./styles/game.scss";
import dataBaseEn from "./js/baseEn";
import dataBasePl from "./js/basePl";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";
import birdsInCategory from "./js/birdsInCategory";
import createAnswerDesc from "./js/createAnswerDesc";
import activateNextCategory from "./js/activateNextCategory";
import addScoreToLocalStorage from "./js/addScoreToLocalStorage";
import { i18n } from "./js/i18n";

const audioPlayerEl = document.querySelector(".quiz__audio-player");
const descThumb = document.querySelector(".answer__description.description");
const birdNameEl = document.querySelector(".quiz__question-name");
const birdImgEl = document.querySelector(".quiz__img");
const nextLevelBtn = document.querySelector(".next-level-btn");
const scoreEl = document.querySelector(".header__score");
const categoriesListEl = document.querySelectorAll(".categories__item");
const descriptionInfo = document.querySelector(".description__info");

let dataBase = dataBaseEn;
let language = "";
let categoryCount = 0; //category count from 0 to 5
let score = 0; //main score
let isCorrect = false;
let questionAudio = new Audio();
let smallAudio = new Audio();
let isAudioPlayerCreated = false;
let scoreInSection = 5; //max points for correct answer

window.addEventListener("load", loadSavedLang);
window.addEventListener("load", showNewQuestion);
nextLevelBtn.addEventListener("click", goToNextLevel);

function loadSavedLang() {
  const chooseLang = window.localStorage.getItem("songBirdLanguage");
  if (chooseLang) {
    renderPageWithLanguage(chooseLang);
  }
}

function renderPageWithLanguage(lang) {
  const { gamePage } = i18n;
  language = lang;

  if (lang === "en") {
    dataBase = dataBaseEn;

    scoreEl.firstElementChild.textContent = gamePage.en.score;
    categoriesListEl.forEach((el, i) => {
      el.textContent = gamePage.en.categories[i];
    });
    descriptionInfo.textContent = gamePage.en.startDescription;
    nextLevelBtn.textContent = gamePage.en.nextLevelBtn;
  } else if (lang === "pl") {
    dataBase = dataBasePl;

    scoreEl.firstElementChild.textContent = gamePage.pl.score;
    categoriesListEl.forEach((el, i) => {
      el.textContent = gamePage.pl.categories[i];
    });
    descriptionInfo.textContent = gamePage.pl.startDescription;
    nextLevelBtn.textContent = gamePage.pl.nextLevelBtn;
  }
}

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
      scoreEl.lastElementChild.textContent = score;
    }

    isCorrect = true;
    if (categoryCount === 5) {
      if (language === "en") {
        nextLevelBtn.textContent = i18n.gamePage.en.finishBtn.toUpperCase();
      } else if (language === "pl") {
        nextLevelBtn.textContent = i18n.gamePage.pl.finishBtn.toUpperCase();
      }

      nextLevelBtn.style.backgroundColor = "green";
    }
  } else {
    if (!isCorrect) {
      //add audio:
      const winAudio = new Audio("./assets/audio/click.mp3");
      winAudio.play();
      //add red color:
      if (!e.target.nextElementSibling.classList.contains("inCorrect")) {
        e.target.nextElementSibling.classList.add("inCorrect");
        scoreInSection = --scoreInSection;
      }
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
  const descTxt =
    language === "en"
      ? i18n.gamePage.en.startDescription
      : i18n.gamePage.pl.startDescription;

  descThumb.innerHTML = `<p class="description__info">
                          ${descTxt}
                        </p>`;
  smallAudio.pause();

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
  const title =
    language === "en"
      ? i18n.gamePage.en.congratsTitle
      : i18n.gamePage.pl.congratsTitle;

  const text =
    language === "en"
      ? `You passed the quiz and scored <span class="congrats__score">${score}</span> out of <span class="congrats__score">30</span> possible points`
      : `Zdałeś quiz i zdobyłeś <span class="congrats__score">${score}</span> z <span class="congrats__score">30</span> możliwych punktów`;

  const tryAgain =
    language === "en" ? i18n.gamePage.en.tryAgain : i18n.gamePage.pl.tryAgain;
  quizMainThumb.innerHTML = `
    <div class="congrats">
      <div class="congrats__thumb">
        <h1 class="congrats__title">${title}</h1>
        <p class="congrats__txt">${text}</p>
        <a class="congrats__restart-link" href="./index.html">${tryAgain}</a>
      </div>
    </div>
  `;
  addScoreToLocalStorage(score);
}

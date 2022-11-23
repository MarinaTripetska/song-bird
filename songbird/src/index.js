// import image from './images/...';
import "./styles/index.scss";

const englishBtnEl = document.querySelector(".english-btn");
const polishBtnEl = document.querySelector(".polish-btn");
const mainTitle = document.querySelector(".main__title");
const mainDescription = document.querySelector(".main__desc");
const newGameBtn = document.querySelector(".main__button.new-game");
const resultsBtn = document.querySelector(".main__button.results");

window.addEventListener("load", loadSavedLang);
englishBtnEl.addEventListener("click", chooseEnglish);
polishBtnEl.addEventListener("click", choosePolish);

function loadSavedLang() {
  const chooseLang = window.localStorage.getItem("songBirdLanguage");
  if (chooseLang) {
    renderPageWithLanguage(chooseLang);
  }
}

function chooseEnglish() {
  window.localStorage.setItem("songBirdLanguage", "en");
  renderPageWithLanguage("en");
}

function choosePolish() {
  window.localStorage.setItem("songBirdLanguage", "pl");
  renderPageWithLanguage("pl");
}

function renderPageWithLanguage(lang) {
  if (lang === "en") {
    mainTitle.textContent = "Discover who's singing";
    mainDescription.textContent =
      "Here is a fantastic app quiz with bird songs that lets you learn more about them.";
    newGameBtn.textContent = "Start quiz";
    resultsBtn.textContent = "Your Results";
  } else if (lang === "pl") {
    mainTitle.textContent = "Odkryj, kto śpiewa";
    mainDescription.textContent =
      "Oto fantastyczny quiz ze śpiewem ptaków, dzięki któremu dowiesz się o nich więcej.";
    newGameBtn.textContent = "Rozpocznij gre!";
    resultsBtn.textContent = "Twoje wyniki";
  }
}

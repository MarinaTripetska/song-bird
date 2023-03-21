import "./styles/index.scss";
import { i18n } from "./js/i18n";

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
  const { mainPage } = i18n;
  if (lang === "en") {
    mainTitle.textContent = mainPage.en.title;
    mainDescription.textContent = mainPage.en.description;
    newGameBtn.textContent = mainPage.en.gameBtn;
    resultsBtn.textContent = mainPage.en.resultBtn;
  } else if (lang === "pl") {
    mainTitle.textContent = mainPage.pl.title;
    mainDescription.textContent = mainPage.pl.description;
    newGameBtn.textContent = mainPage.pl.gameBtn;
    resultsBtn.textContent = mainPage.pl.resultBtn;
  }
}

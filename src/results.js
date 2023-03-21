import "./styles/results.scss";
import { i18n } from "./js/i18n";

const titleEl = document.querySelector(".results__title");
const toMainPageEl = document.querySelector(".results__link.main-page");
const toNewGameEl = document.querySelector(".results__link.new-game");
let language;

window.addEventListener("load", loadSavedLang);
window.addEventListener("load", loadResults);

function loadSavedLang() {
  const chooseLang = window.localStorage.getItem("songBirdLanguage");
  language = chooseLang;
  if (chooseLang) {
    renderPageWithLanguage(chooseLang);
  }
}

function renderPageWithLanguage(lang) {
  const { resultsPage } = i18n;
  if (lang === "en") {
    titleEl.textContent = resultsPage.en.title;
    toMainPageEl.textContent = resultsPage.en.toMainPage;
    toNewGameEl.textContent = resultsPage.en.toNewGame;
  } else if (lang === "pl") {
    titleEl.textContent = resultsPage.pl.title;
    toMainPageEl.textContent = resultsPage.pl.toMainPage;
    toNewGameEl.textContent = resultsPage.pl.toNewGame;
  }
}

function loadResults() {
  const insteadResultList = document.querySelector(".results__instead-list");
  const resultList = document.querySelector(".results__list");
  const songBirdScore = JSON.parse(
    window.localStorage.getItem("songBirdScore")
  );

  if (songBirdScore) {
    const resultName =
      language === "en"
        ? i18n.resultsPage.en.result
        : i18n.resultsPage.pl.result;

    const liElements = songBirdScore.map(
      (el, i) =>
        `<li class="result"><span class="result__name">${resultName} ${
          i + 1
        }:</span> 
        <span class="result__score">${el}</span></li>`
    );
    resultList.innerHTML = `${liElements.join("")}`;
  } else {
    insteadResultList.innerHTML = `<p>No results yet!<p>`;
  }
}

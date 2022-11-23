import "./styles/results.scss";

window.addEventListener("load", loadResults);

function loadResults() {
  const insteadResultList = document.querySelector(".results__instead-list");
  const resultList = document.querySelector(".results__list");
  const songBirdScore = JSON.parse(
    window.localStorage.getItem("songBirdScore")
  );

  if (songBirdScore) {
    const liElements = songBirdScore.map(
      (el, i) =>
        `<li class="result"><span class="result__name">Result ${i + 1}:</span> 
        <span class="result__score">${el}</span></li>`
    );
    resultList.innerHTML = `${liElements.join("")}`;
  } else {
    insteadResultList.innerHTML = `<p>No results yet!<p>`;
  }
}

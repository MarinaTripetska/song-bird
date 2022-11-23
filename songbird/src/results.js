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
      (el, i) => `<li>Result ${i + 1}: ${el}</li>`
    );
    resultList.innerHTML = `${liElements}`;
  } else {
    insteadResultList.innerHTML = `<p>No results yet!<p>`;
  }
}

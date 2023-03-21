function addScoreToLocalStorage(score) {
  const prevScore = JSON.parse(window.localStorage.getItem("songBirdScore"));
  if (prevScore) {
    prevScore.push(score);
    window.localStorage.setItem("songBirdScore", JSON.stringify(prevScore));
  } else {
    window.localStorage.setItem("songBirdScore", JSON.stringify([score]));
  }
}

export default addScoreToLocalStorage;

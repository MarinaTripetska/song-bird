import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";
import createQuestionPlayer from "./js/createQuestionPlayer";

const audioPlayerEl = document.querySelector(".audio-player");

let categoryCount = 0;

const someBird = randomBirdInCategory(categoryCount, dataBase);
createQuestionPlayer(audioPlayerEl, someBird.audio, "audio-player");

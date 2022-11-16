import "./styles/game.scss";
import dataBase from "./js/base";
import randomBirdInCategory from "./js/randomBirdInCategory";

let categoryCount = 0;

const someBird = randomBirdInCategory(categoryCount, dataBase);
console.log(someBird);

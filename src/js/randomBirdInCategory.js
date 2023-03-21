function randomBirdInCategory(categoryNumber, dataBase) {
  const amountBirdsInCategory = dataBase[categoryNumber].length;
  const randomPosition = Math.floor(Math.random() * amountBirdsInCategory);
  return dataBase[categoryNumber][randomPosition];
}

export default randomBirdInCategory;

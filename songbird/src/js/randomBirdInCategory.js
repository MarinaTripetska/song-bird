function randomBirdInCategory(categoryNumber, dataBase) {
  const amountBirdsInCategory = dataBase[categoryNumber].length;
  const randomPosition = Math.floor(Math.random() * amountBirdsInCategory);
  console.log(randomPosition);
  return dataBase[categoryNumber][randomPosition];
}

export default randomBirdInCategory;

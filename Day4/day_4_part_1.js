const fs = require("fs/promises");
const filePath =
  "/Users/noahmilliken/coding/code_connector/AdventOfCode/Day4/Day_4.txt";

const calculateCardValue = (card) => {
  let winNum = 0;
  const cardValues = card.split(":")[1];
  const array = cardValues
    .trim()
    .split(" | ")
    .map((arr) => arr.split(/\s+/));
  let [winners, nums] = array;
  winners = winners.map((num) => Number(num));
  nums = nums.map((num) => Number(num));
  let firstOrSecond = true;
  let count = 0;
  nums.forEach((num) => {
    if (winners.includes(num)) {
      if (firstOrSecond) {
        winNum += 1;
        if (count < 1) {
          console.log(firstOrSecond);
          firstOrSecond = false;
        }
      } else {
        winNum *= 2;
      }
    }
  });
  return winNum;
};

const getData = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const array = data.split("\n");
    console.log(array);
    let total = 0;
    array.forEach((line) => {
      let cardScore = calculateCardValue(line);
      total += cardScore;
      console.log(total);
    });
    return total;
  } catch (error) {
    console.log(error);
  }
};

getData().then((answer) => {
  console.log(answer);
});

//make a funciton to pass each card to.
//split the card at : then splt again at | finally split each array on the whitespace
//check how many of the numbers on the left match the numbers on the right
//return the card value and run on each line of the lines.

const fs = require("fs/promises");

const filePath = "day2/Day_2.txt";

const getData = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const colorObj = {
      red: 12,
      green: 13,
      blue: 14,
    };
    const getPossibleGames = (arr, obj) => {
      let possibleSum = 0;
      let i = 0;
      arr.forEach((game) => {
        prepareString(game).forEach((el) => {
          const [color, number] = el;
          const value = obj[color];
          value < number ? (possibleSum += i) : null;
        });
        i++;
      });

      console.log(possibleSum);
    };

    const prepareString = (str) => {
      let picks = str
        .replace(/;/g, ",")
        .split(",")
        .map((pick) => pick.trim().split(" ").reverse());
      return picks;
    };

    const lines = data.split("\n").slice(0, data.length - 1);
    getPossibleGames(lines, colorObj);
  } catch (err) {
    console.log(err);
  }
};
getData();

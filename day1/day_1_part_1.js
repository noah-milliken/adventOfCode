const fs = require("fs/promises");

const filePath = "./Day_1.txt";

const getData = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const array = data.split("\n");
    const numsArr = [];
    array.map((el) => {
      let matches = el.replace(/[^0-9]/g, "");
      numsArr.push([matches]);
    });
    return numsArr;
  } catch (err) {
    console.log(err);
    return [];
  }
};
getData().then((result) => {
  const nums = result;
  const newNums = nums
    .filter((el) => el[0].length)
    .map((el) => el[0].split(""));
  const numbers = newNums.map((el) => {
    if (el.length < 2) {
      return [el, el];
    } else {
      return [el[0], el[el.length - 1]];
    }
  });
  const numsArray = numbers
    .map((el) => {
      return Number(el.join(""));
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });

  console.log(numsArray);
});

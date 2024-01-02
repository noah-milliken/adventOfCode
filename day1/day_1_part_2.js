// const strings = [
//   "two1nine",
//   "eightwothree",
//   "abcone2threexyz",
//   "xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ];
const valuesObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const fs = require("fs/promises");

const filePath = "./Day_1.txt";

const getData = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const array = data.split("\n");

    return array;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const findDigitStrings = (inputString, valuesObj) => {
  const matches = [];
  for (let i = 0; i <= inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      const substring = inputString.substring(i, j);
      if (valuesObj.hasOwnProperty(substring)) {
        matches.push(valuesObj[substring]);
      }
    }
  }
  if (matches.length < 2) {
    return matches.length > 0
      ? [Number(matches[0]), Number(matches[0])].join("")
      : null;
  } else {
    return [matches[0], matches[matches.length - 1]].join("");
  }
};
getData().then((result) => {
  const numbers = result;
  const arr = numbers.map((el) => {
    return findDigitStrings(el, valuesObj);
  });
  const digits = arr.map((el) => {
    return Number(el);
  });
  console.log(
    digits.reduce((a, c) => {
      return a + c;
    })
  );
});

// const answer = strings
//   .map((el) => {
//     return Number(findDigitStrings(el, valuesObj).join(""));
//   })
//   .reduce((a, b) => {
//     return a + b;
//   });
// console.log(answer);

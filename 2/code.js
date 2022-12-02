import { readFile } from "fs/promises";

const CHOICES = {
  X: 1,
  Y: 2,
  Z: 3,
};
// A for Rock, B for Paper, and C for Scissors
// X for Rock, Y for Paper, and Z for Scissors
const WINS = {
  A: "Z",
  B: "X",
  C: "Y",
};
const SAME = {
  A: "X",
  B: "Y",
  C: "Z",
};

const score = (await readFile("./2/input"))
  .toString("utf8")
  .trim()
  .split("\n")
  .reduce((sum, pair) => {
    const [opponent, response] = pair.split(" ");
    sum =
      sum +
      CHOICES[response] +
      (SAME[opponent] === response ? 3 : response === WINS[opponent] ? 0 : 6);
    console.log(opponent, response, sum);
    return sum;
  }, 0);

console.log(score);

import { readFile } from "fs/promises";
/*
In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
*/
// A for Rock, B for Paper, and C for Scissors
// X for lose, Y for draw, Z for win
// X for Rock, Y for Paper, and Z for Scissors
const CHOICES = {
  X: 1,
  Y: 2,
  Z: 3,
};
const OUTCOME = {
  X: 0,
  Y: 3,
  Z: 6,
};
const RESPONSES = {
  "A X": "Z",
  "A Y": "X",
  "A Z": "Y",
  "B X": "X",
  "B Y": "Y",
  "B Z": "Z",
  "C X": "Y",
  "C Y": "Z",
  "C Z": "X",
};

const score = (await readFile("./2/input"))
  .toString("utf8")
  .trim()
  .split("\n")
  .reduce((sum, pair) => {
    const [_, outcome] = pair.split(" ");
    sum = sum + CHOICES[RESPONSES[pair]] + OUTCOME[outcome];
    console.log(pair, outcome, sum);
    return sum;
  }, 0);

console.log(score);

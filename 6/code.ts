import { readFile } from "fs/promises";

const input = (await readFile("./6/input")).toString("utf8");

export const day6part1 = (input: string) => {
  for (let i = 4; i < input.length; i++) {
    const x = new Set(input.slice(i - 4, i).split(""));
    if (x.size === 4) {
      return i;
    }
  }
};

export const day4part2 = (input: string) => {};

console.log(day6part1(input));
// console.log(day6part2(input));

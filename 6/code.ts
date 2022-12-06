import { readFile } from "fs/promises";

const input = (await readFile("./6/input")).toString("utf8");

const hasMarker = (substr: string) => {
  const x = new Set(substr.split(""));
  if (x.size === 14) {
    return true;
  }
};

export const day6part1 = (input: string) => {
  const out = [];
  for (let i = 14; i < input.length; i++) {
    if (hasMarker(input.slice(i - 14, i))) {
      return i;
    }
  }
};

export const day4part2 = (input: string) => {};

console.log(day6part1(input));
// console.log(day6part2(input));

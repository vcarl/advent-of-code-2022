import { readFile } from "fs/promises";

const input = (await readFile("./6/input")).toString("utf8");

const findMarker = (size: number, input: string) => {
  for (let i = size; i < input.length; i++) {
    if (new Set(input.slice(i - size, i).split("")).size === size) {
      return i;
    }
  }
};

export const day6part1 = (input: string) => findMarker(4, input);

export const day6part2 = (input: string) => findMarker(14, input);

console.log(day6part1(input));
console.log(day6part2(input));

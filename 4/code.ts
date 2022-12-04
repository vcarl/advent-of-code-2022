import { readFile } from "fs/promises";

const input = (await readFile("./4/input")).toString("utf8").trim();

export const day4part1 = (input: string) => {};

export const day4part2 = (input: string) => {};

console.log(day4part1(input));
console.log(day4part2(input));

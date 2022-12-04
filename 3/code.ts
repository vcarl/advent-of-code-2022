import { readFile } from "fs/promises";
import { chunkBy, sum } from "../helpers";

const input = (await readFile("./3/input")).toString("utf8");

const getPriority = (char: string) => {
  if (char.length < 1) throw new Error("char is 0 length, expected 1");
  if (char.length > 1) throw new Error("char is too long, expected 1");
  const codepoint = char.codePointAt(0) || -1;
  /**
   * a is priority `1`, A is priority `27`. The only character ranges we care
   * about are `a-z` and `A-Z`
   * 'a'.codePointAt(0) === 97 - 96 = 1
   * 'A'.codePointAt(0) === 65 - 38 = 27
   */
  return codepoint > 95 ? codepoint - 96 : codepoint - 38;
};

const getCompartments = (bag: string) => [
  bag.slice(0, bag.length / 2),
  bag.slice(bag.length / 2),
];

const findItem = (bags: string[]) => {
  const [one, ...others] = bags;
  const match =
    one.split("").find((x) => others.every((y) => y.includes(x))) || "";
  if (!match) {
    throw new Error(`failed to find a match! Is the input valid? ${bags}`);
  }
  return match;
};

export const day3part1 = (input: string) =>
  input
    .trim()
    .split("\n")
    .map(getCompartments)
    .map(findItem)
    .map(getPriority)
    .reduce(sum);

export const day3part2 = (input: string) =>
  input
    .trim()
    .split("\n")
    .reduce(chunkBy(3), [] as string[][])
    .map(findItem)
    .map(getPriority)
    .reduce(sum);

console.log(day3part1(input));
console.log(day3part2(input));

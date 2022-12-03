import { readFile } from "fs/promises";
import { chunk } from "lodash-es";
import { sum } from "../helpers";

const input = (await readFile("./3/input")).toString("utf8").trim();

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

export const day3part1 = (input: string) => {
  const itemPriorities = input
    .trim()
    .split("\n")
    .map((bag) => {
      const bag1 = bag.slice(0, bag.length / 2);
      const bag2 = bag.slice(bag.length / 2);
      // Split the first compartment into characters and find the duplicate
      const match = bag1.split("").find((x) => bag2.includes(x));
      if (!match) {
        throw new Error(`failed to find a match! Is the input valid? ${bag}`);
      }
      return getPriority(match);
    });
  return sum(itemPriorities);
};

const findBadge = (bags: string[]) => {
  const [one, ...others] = bags;
  return one.split("").find((x) => others.every((y) => y.includes(x))) || "";
};

export const day3part2 = (input: string) => {
  const elfGroups = chunk(input.trim().split("\n"), 3);
  const groupBadgePriorities = elfGroups.map((bags) =>
    getPriority(findBadge(bags)),
  );
  return sum(groupBadgePriorities);
};

console.log(day3part1(input));
console.log(day3part2(input));

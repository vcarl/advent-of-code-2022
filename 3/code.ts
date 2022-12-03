import { readFile } from "fs/promises";
const sum = (arr: number[]) => arr.reduce((sum, val) => sum + val, 0);
const getPriority = (char: string) => {
  const codepoint = char.codePointAt(0) || -1;

  return codepoint > 95 ? codepoint - 96 : codepoint - 38;
};

const priority = sum(
  (await readFile("./3/input"))
    .toString("utf8")
    .trim()
    .split("\n")
    .map((bag) => {
      const one = bag.slice(0, bag.length / 2);
      const two = bag.slice(bag.length / 2);
      const match = one.split("").find((x) => two.includes(x)) || "";
      const priority = getPriority(match);
      return priority;
    }),
);

console.log(priority);

import { readFile } from "fs/promises";
import { chunk } from "lodash-es";

const sum = (arr: number[]) => arr.reduce((sum, val) => sum + val, 0);
const getPriority = (char: string) => {
  const codepoint = char.codePointAt(0) || -1;

  return codepoint > 95 ? codepoint - 96 : codepoint - 38;
};

const findBadge = (bags: string[]) => {
  const [one, ...rest] = bags;
  return one.split("").find((x) => rest.every((y) => y.includes(x))) || "";
};

const priority = sum(
  chunk(
    (await readFile("./3/input")).toString("utf8").trim().split("\n"),
    3,
  ).map((bags) => {
    const priority = getPriority(findBadge(bags));
    return priority;
  }),
);

console.log(priority);

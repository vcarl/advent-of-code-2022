import { readFile } from "fs/promises";

const input = (await readFile("./4/input")).toString("utf8").trim();

const isContained = (a: string, b: string) => {
  const [a1, a2] = a.split("-");
  const [b1, b2] = b.split("-");
  return (
    (Number(a1) <= Number(b1) && Number(a2) >= Number(b2)) ||
    (Number(b1) <= Number(a1) && Number(b2) >= Number(a2))
  );
};

const isOverlapping = (a: string, b: string) => {
  const [a1, a2] = a.split("-");
  const [b1, b2] = b.split("-");
  return (
    (Number(a1) >= Number(b1) && Number(a1) <= Number(b2)) ||
    (Number(a2) >= Number(b1) && Number(a2) <= Number(b2)) ||
    (Number(b1) >= Number(a1) && Number(b1) <= Number(a2)) ||
    (Number(b2) >= Number(a1) && Number(b2) <= Number(a2))
  );
};

export const day4part1 = (input: string) => {
  return input
    .trim()
    .split("\n")
    .map((x) => {
      const [one, two] = x.split(",");
      const contained = isContained(one, two);
      return contained;
    })
    .reduce((sum, val) => (val ? sum + 1 : sum), 0);
};

export const day4part2 = (input: string) => {
  return input
    .trim()
    .split("\n")
    .map((x) => {
      const [one, two] = x.split(",");
      const contained = isOverlapping(one, two);
      return contained;
    })
    .reduce((sum, val) => (val ? sum + 1 : sum), 0);
};

console.log(day4part1(input));
console.log(day4part2(input));

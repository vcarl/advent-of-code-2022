import { readFile } from "fs/promises";
const sum = (arr: number[]) => arr.reduce((sum, val) => sum + val, 0);

const elfLoads = (await readFile("./1/input"))
  .toString("utf8")
  .split("\n\n")
  .map((load) => sum(load.split("\n").map((x) => Number(x))))
  .sort((a, b) => b - a);
console.log(elfLoads[0], sum(elfLoads.slice(0, 3)));

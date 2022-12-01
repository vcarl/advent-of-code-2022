import { readFile } from "fs/promises";

const input = await readFile("./1/input");

const elfLoads = input
  .toString("utf8")
  .split("\n\n")
  .map((load) => load.split("\n").reduce((sum, val) => sum + Number(val), 0))
  .sort((a, b) => b - a);
console.log(elfLoads[0]);
console.log(elfLoads.slice(0, 3).reduce((sum, val) => sum + Number(val), 0));

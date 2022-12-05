import { readFile } from "fs/promises";

const input = (await readFile("./5/input")).toString("utf8");

const parseContainers = (containers: string) => {
  const temp = containers.split("\n");
  const boxes = temp
    .slice(0, temp.length - 1)
    .map((x) => x.replaceAll("    ", "_").replaceAll(/[\[\] ]/g, ""))
    .reverse();

  const { length } = temp[temp.length - 1].replace(/ +/g, "");
  const stacks = boxes.reduce(
    (arr, val) => {
      val.split("").forEach((box, idx) => {
        if (box === "_") return;
        (arr[idx] ??= []).push(box);
      });
      return arr;
    },
    Array.from({ length }, () => [] as string[]),
  );
  return stacks;
};
const instructionsRegex = /move (\d+) from (\d+) to (\d+)/;
const parseInstructions = (instructions: string) =>
  instructions
    .trim()
    .split("\n")
    .map((x) => {
      const [count = 0, from = 0, to = 0] =
        x.match(instructionsRegex)?.map(Number).slice(1) || [];
      return { count, from: from - 1, to: to - 1 };
    });

type Instruction = { from: number; to: number; count: number };
type Stacks = string[][];
const moveOne = (stacks: Stacks, { from, to, count }: Instruction) => {
  for (let i = 0; i < count; i++) {
    const val = stacks[from].pop()!;
    stacks[to].push(val || "👀");
  }
};
const moveMany = (stacks: Stacks, { from, to, count }: Instruction) => {
  const val = stacks[from].slice(-count)!;
  stacks[from] = stacks[from].slice(0, -count);
  stacks[to] = stacks[to].concat(val);
};

const takeLast = <T>(arr: T[]) => arr[arr.length - 1];
const join = (accum: string, val: string) => accum.concat(val);
const moveCrates = (
  input: string,
  strategy: (stacks: Stacks, i: Instruction) => void,
) => {
  const [containerInput, instructionsInput] = input.split("\n\n");
  const stacks = parseContainers(containerInput);
  const instructions = parseInstructions(instructionsInput);
  instructions.forEach((i) => strategy(stacks, i));
  return stacks.map(takeLast).reduce(join);
};

export const day4part1 = (input: string) => moveCrates(input, moveOne);

export const day4part2 = (input: string) => moveCrates(input, moveMany);

console.log(day4part1(input));
console.log(day4part2(input));

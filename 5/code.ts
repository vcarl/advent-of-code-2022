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
        arr[idx] ? arr[idx].push(box) : [box];
      });
      return arr;
    },
    Array.from({ length }, () => [] as string[]),
  );
  return stacks;
};
const instructionsRegex = /move (\d+) from (\d+) to (\d+)/;
const parseInstructions = (instructions: string) => {
  return instructions
    .trim()
    .split("\n")
    .map((x) => {
      const match = x.match(instructionsRegex)?.map(Number).slice(1);
      return {
        count: match![0],
        from: match![1] - 1,
        to: match![2] - 1,
      };
    });
};

const execute = (
  stacks: string[][],
  inst: { from: number; to: number; count: number }[],
) => {
  inst.forEach((instruction) => {
    for (let i = 0; i < instruction.count; i++) {
      const val = stacks[instruction.from].pop()!;
      stacks[instruction.to].push(val || "👀");
    }
    console.log(instruction);
    console.log(
      stacks
        .map(
          (x, i) =>
            i +
            1 +
            x
              .join("")
              .concat(
                i === instruction.from
                  ? "⤴️"
                  : i === instruction.to
                  ? "⤵️"
                  : "",
              ),
        )
        .join("\n"),
    );
  });
  const out = stacks.reduce((accum, val) => {
    accum = accum.concat(val[val.length - 1]);
    return accum;
  }, "");
  console.log(stacks.map((x) => x.join("")));
  return out;
};

export const day4part1 = (input: string) => {
  const [containers, instructions] = input.split("\n\n");
  const stacks = parseContainers(containers);
  console.log(containers);
  console.log(stacks.map((x, i) => i + 1 + x.join("")).join("\n"));
  console.log("");
  return execute(stacks, parseInstructions(instructions));
};

// export const day4part2 = (input: string) =>
// input
//   .trim()
//   .map(parseContainers)
//   .reduce((sum, val) => (val ? sum + 1 : sum), 0);

console.log(day4part1(input));
// console.log(day4part2(input));

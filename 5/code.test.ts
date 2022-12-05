import { describe, expect, it } from "vitest";
import { day4part1, day4part2 } from "./code";

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`;

describe("part 1", () => {
  it("works on test input", () => {
    expect(day4part1(testInput)).toBe("CMZ");
  });
});
describe("part 2", () => {
  it("works on test input", async () => {
    // expect(day4part2(testInput)).toBe(4);
  });
});

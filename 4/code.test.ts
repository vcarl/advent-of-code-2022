import { describe, expect, it } from "vitest";
import { day4part1, day4part2 } from "./code";

const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

describe("part 1", () => {
  it("works on test input", () => {
    expect(day4part1(testInput)).toBe(2);
  });
});
describe("part 2", () => {
  it("works on test input", async () => {
    expect(day4part2(testInput)).toBe(4);
  });
});

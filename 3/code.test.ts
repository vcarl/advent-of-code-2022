import { describe, expect, it } from "vitest";
import { day3part1, day3part2 } from "./code";

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

describe("part 1", () => {
  it("works on test input", () => {
    expect(day3part1(testInput)).toBe(157);
  });
});
describe("part 2", () => {
  it("works on test input", async () => {
    expect(day3part2(testInput)).toBe(70);
  });
});

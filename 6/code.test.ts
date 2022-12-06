import { describe, expect, it } from "vitest";
import { day6part1, day4part2 } from "./code";

describe("part 1", () => {
  it("works on test input", () => {
    // expect(day6part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(7);
    // expect(day6part1("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
    // expect(day6part1("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
    // expect(day6part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
    // expect(day6part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
  });
});
describe("part 2", () => {
  it("works on test input", async () => {
    expect(day6part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(19);
    expect(day6part1("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(23);
    expect(day6part1("nppdvjthqldpwncqszvftbrmjlhg")).toBe(23);
    expect(day6part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(29);
    expect(day6part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(26);
  });
});

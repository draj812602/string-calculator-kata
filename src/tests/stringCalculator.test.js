import { describe, expect, test } from "vitest";
import { add } from "../utils/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  test("should return the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
  });
  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });
  test("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("10,20,30")).toBe(60);
  });
  test("should handle new line as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("10\n20\n30,40")).toBe(100);
  });
  test("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n3|5|7")).toBe(15);
    expect(add("//$\n2$4$6$8")).toBe(20);
  });
  test("should throw an error when negative numbers are present", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("-1,-5,-10")).toThrow(
      "negative numbers not allowed: -1, -5, -10"
    );
  });
});

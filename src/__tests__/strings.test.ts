import { describe, it, expect } from "vitest";
import { capitalize, slugify, truncate, countWords } from "../strings";

describe("strings", () => {
  describe("capitalize", () => {
    it("capitalizes a lowercase word", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("handles an empty string", () => {
      expect(capitalize("")).toBe("");
    });

    it("lowercases the rest of the string", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });

    it("handles a single character", () => {
      expect(capitalize("a")).toBe("A");
    });
  });

  describe("slugify", () => {
    it("converts a string to a slug", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });

    it("removes special characters", () => {
      expect(slugify("Hello, World!")).toBe("hello-world");
    });

    it("handles multiple spaces", () => {
      expect(slugify("hello   world")).toBe("hello-world");
    });

    it("trims whitespace", () => {
      expect(slugify("  hello  ")).toBe("hello");
    });
  });

  describe("truncate", () => {
    it("does not truncate short strings", () => {
      expect(truncate("hello", 10)).toBe("hello");
    });

    it("truncates long strings with ellipsis", () => {
      expect(truncate("hello world", 8)).toBe("hello...");
    });

    it("handles exact length", () => {
      expect(truncate("hello", 5)).toBe("hello");
    });
  });

  describe("countWords", () => {
    it("counts words in a sentence", () => {
      expect(countWords("hello world")).toBe(2);
    });

    it("handles an empty string", () => {
      expect(countWords("")).toBe(0);
    });

    it("handles multiple spaces", () => {
      expect(countWords("hello   world   test")).toBe(3);
    });

    it("handles whitespace only", () => {
      expect(countWords("   ")).toBe(0);
    });
  });
});

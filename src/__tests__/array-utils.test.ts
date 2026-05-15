import { describe, it, expect } from "vitest";
import { unique, chunk, flatten, groupBy } from "../array-utils";

describe("array-utils", () => {
  describe("unique", () => {
    it("removes duplicates", () => {
      expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    it("returns the same array when no duplicates", () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("handles empty array", () => {
      expect(unique([])).toEqual([]);
    });

    it("works with strings", () => {
      expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
    });
  });

  describe("chunk", () => {
    it("splits array into even chunks", () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    it("handles uneven chunks", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("handles chunk size larger than array", () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    it("handles empty array", () => {
      expect(chunk([], 3)).toEqual([]);
    });

    it("throws on invalid size", () => {
      expect(() => chunk([1, 2], 0)).toThrow("Chunk size must be positive");
    });
  });

  describe("flatten", () => {
    it("flattens nested arrays", () => {
      expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    it("handles already flat arrays", () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("handles empty arrays", () => {
      expect(flatten([])).toEqual([]);
    });

    it("handles mixed flat and nested", () => {
      expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe("groupBy", () => {
    it("groups objects by key", () => {
      const items = [
        { name: "Alice", dept: "Eng" },
        { name: "Bob", dept: "Design" },
        { name: "Carol", dept: "Eng" },
      ];
      const result = groupBy(items, "dept");
      expect(result["Eng"]).toHaveLength(2);
      expect(result["Design"]).toHaveLength(1);
    });

    it("handles empty array", () => {
      expect(groupBy([] as { dept: string }[], "dept")).toEqual({});
    });
  });
});

import { describe, it, expect } from "vitest";
import { isValidEmail, isStrongPassword, isInRange } from "../validators";

describe("validators", () => {
  describe("isValidEmail", () => {
    it("accepts a valid email", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
    });

    it("rejects email without @", () => {
      expect(isValidEmail("userexample.com")).toBe(false);
    });

    it("rejects email without domain", () => {
      expect(isValidEmail("user@")).toBe(false);
    });

    it("rejects email with spaces", () => {
      expect(isValidEmail("user @example.com")).toBe(false);
    });

    it("rejects empty string", () => {
      expect(isValidEmail("")).toBe(false);
    });
  });

  describe("isStrongPassword", () => {
    it("accepts a strong password", () => {
      expect(isStrongPassword("Password1")).toBe(true);
    });

    it("rejects short passwords", () => {
      expect(isStrongPassword("Pass1")).toBe(false);
    });

    it("rejects without uppercase", () => {
      expect(isStrongPassword("password1")).toBe(false);
    });

    it("rejects without lowercase", () => {
      expect(isStrongPassword("PASSWORD1")).toBe(false);
    });

    it("rejects without number", () => {
      expect(isStrongPassword("Password")).toBe(false);
    });
  });

  describe("isInRange", () => {
    it("returns true for value within range", () => {
      expect(isInRange(5, 1, 10)).toBe(true);
    });

    it("returns true for value at lower boundary", () => {
      expect(isInRange(1, 1, 10)).toBe(true);
    });

    it("returns true for value at upper boundary", () => {
      expect(isInRange(10, 1, 10)).toBe(true);
    });

    it("returns false for value below range", () => {
      expect(isInRange(0, 1, 10)).toBe(false);
    });

    it("returns false for value above range", () => {
      expect(isInRange(11, 1, 10)).toBe(false);
    });
  });
});

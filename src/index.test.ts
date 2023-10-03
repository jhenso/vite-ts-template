import { expect, it, describe } from "vitest";
import { hello } from "./index";

describe("hello", () => {
  it("should log", () => {
    expect(hello()).toBe("hi mum");
  });
});

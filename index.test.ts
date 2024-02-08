import { test, expect } from "bun:test"
import { bun } from "./index";

test("", () => {
    expect(bun()).toBe("I'm bun");
})
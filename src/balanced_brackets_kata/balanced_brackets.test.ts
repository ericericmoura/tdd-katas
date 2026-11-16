import { describe, expect, test } from "vitest";
import { isBalanced } from "./balanced_brackets.js";

describe("Balanced Brackets Kata", () => {
    test.for([
        { brackets: "[]"      , expected: "OK"   },
        { brackets: "[][]"    , expected: "OK"   },
        { brackets: "[[]]"    , expected: "OK"   },
        { brackets: "[[[][]]]", expected: "OK"   },
        { brackets: ""        , expected: "FAIL" },
        { brackets: "]["      , expected: "FAIL" },
        { brackets: "[["      , expected: "FAIL" },
        { brackets: "][]["    , expected: "FAIL" },
        { brackets: "[][]]["  , expected: "FAIL" },
    ])("'$brackets' should return '$expected'", ({ brackets, expected }) => {
        expect(isBalanced(brackets)).toBe(expected);
    })
})
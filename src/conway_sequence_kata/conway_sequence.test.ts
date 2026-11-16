import { describe, expect, test } from "vitest";
import { numberToWord, readAloud } from "./conway_sequence.js";

describe("Conway's Sequence", () => {
    test.for([
        { number: 1, aloud: "one" },
        { number: 2, aloud: "two" },
        { number: 3, aloud: "three" },
        { number: 9, aloud: "nine" },
    ])("Correctly reads the number '$number' as '$aloud'", ({ number, aloud }) => {
        expect(numberToWord(number)).toBe(aloud);
    })

    test.for([
        { aloud: "one 1", term: "1" },
        { aloud: "two 1s", term: "11" },
        { aloud: "two 2s", term: "22" },
        { aloud: "two 3s", term: "33" },
        { aloud: "three 1s", term: "111" },
    ])("Correctly reads the term '$term' as $aloud", ({ aloud, term }) => {
        expect(readAloud(term)).toBe(aloud);    
    })
})
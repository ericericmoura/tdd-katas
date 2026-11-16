import { describe, expect, test } from "vitest";
import { lookAndSay, numberToWord, readAloud, wordToNumber } from "./conway_sequence.js";

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
        { number: 1, word: "one" },
        { number: 2, word: "two" },
        { number: 3, word: "three" },
        { number: 9, word: "nine" },
    ])("Correctly parses the word '$word' to '$number'", ({ number, word }) => {
        expect(wordToNumber(word)).toBe(number);
    })

    test.for([
        { aloud: "one 1", term: "1" },
        { aloud: "two 1s", term: "11" },
        { aloud: "two 2s", term: "22" },
        { aloud: "two 3s", term: "33" },
        { aloud: "three 1s", term: "111" },
        { aloud: "one 1, one 2, two 1s", term: "1211" },
    ])("Correctly reads the term '$term' as $aloud", ({ aloud, term }) => {
        expect(readAloud(term)).toBe(aloud);
    })

    test.for([
        { term: "1", iterations: 1, expected: "11" },
        { term: "1", iterations: 2, expected: "21" },
        { term: "1", iterations: 3, expected: "1211" },
        { term: "1", iterations: 4, expected: "111221" },
        { term: "1", iterations: 5, expected: "312211" },
        { term: "3211", iterations: 1, expected: "131221" },
        { term: "2", iterations: 2, expected: "1112" },
    ])("returns '$expected' for $iterations iterations on '$term'", ({ term, iterations, expected }) => {
        expect(lookAndSay(term, iterations)).toBe(expected);
    })
})
import { describe, expect, test } from "vitest";
import { findAnagrams, groupAnagrams, isAnagram } from "./anagram.js";

describe("Anagram Detector Kata", () => {
    describe("isAnagram", () => {
        test.for([
            { a: "silent", b: "listen", expected: true },
            { a: "hello", b: "world", expected: false },
            { a: "Astronomer", b: "Moon starer", expected: true },
            { a: "rail safety", b: "fairy tales", expected: true },
            { a: "cat", b: "cat", expected: false },
            { a: "cat", b: "tac", expected: true },
            { a: "aab", b: "abb", expected: false },
        ])("returns $expected for $a and $b", ({ a, b, expected }) => {
            expect(isAnagram(a, b)).toBe(expected);
        });
    })

    describe("findAnagrams", () => {
        test.for([
            { subject: "listen", candidates: ["silent", "tinsel"]          , expected: ["silent", "tinsel"] },
            { subject: "listen", candidates: ["hello" , "world" ]          , expected: []                   },
            { subject: "master", candidates: ["stream", "maters", "pigeon"], expected: ["stream", "maters"] },
        ])("returns $expected for the candidates $candidates of subject '$subject'", ({ candidates, subject, expected }) => {
            expect(findAnagrams(subject, candidates)).toEqual(expected);
        });
    });

    describe("groupAnagrams", () => {
        test.for([
            { list: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
            { list: ["eat", "tea", "ate"], expected: [["eat", "tea", "ate"]] },
            { list: ["abc", "def"], expected: [["abc"], ["def"]] },
            { list: [], expected: [] },
        ])("returns groups $expected for words $list", ({ list, expected }) => {
            expect(groupAnagrams(list)).toEqual(expected);
        })
    })
})
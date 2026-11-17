import { describe, expect, test } from "vitest";
import { isPrime } from "./is_prime.js";

describe("Is Prime", () => {
    test.for([
        { number: 2 , expected: true },
        { number: 4 , expected: false },
        { number: 5 , expected: true  },
        { number: 28, expected: false },
        { number: 29, expected: true  },
        { number: 54, expected: false },
        { number: 59, expected: true  },
    ])("returns $expected for $number", ({ number, expected }) => {
        expect(isPrime(number)).toBe(expected);
    })
})
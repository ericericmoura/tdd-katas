import { describe, expect, test } from "vitest";
import { fizzBuzz, fizzBuzzWhiz } from "./fizz_buzz_whiz.js";

describe("Fizz Buzz", () => {
    test.for([
        { number: 3 , expected: "Fizz"     },
        { number: 6 , expected: "Fizz"     },
        { number: 24, expected: "Fizz"     },
        { number: 5 , expected: "Buzz"     },
        { number: 10, expected: "Buzz"     },
        { number: 25, expected: "Buzz"     },
        { number: 15, expected: "FizzBuzz" },
        { number: 75, expected: "FizzBuzz" },
    ])("returns $expected for $number", ({ number, expected }) => {
        expect(fizzBuzz(number)).toBe(expected);
    })

    describe("return Whiz for prime numbers", () => {
        test.for([
            { number: 3 , expected: "FizzWhiz" },
            { number: 5 , expected: "BuzzWhiz" },
            { number: 7 , expected: "Whiz"     },
            { number: 6 , expected: "Fizz"     },
            { number: 10, expected: "Buzz"     },
            { number: 15, expected: "FizzBuzz" },
        ])("returns $expected for $number", ({ number, expected }) => {
            expect(fizzBuzzWhiz(number)).toBe(expected);
        })
    })
})
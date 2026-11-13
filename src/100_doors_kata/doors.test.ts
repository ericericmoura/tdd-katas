import { describe, expect, test } from "vitest";
import { getDoors, getDoorsAfterPasses } from "./doors.js";

describe("100 Doors Kata", () => {
    test.for([
        { pass: 0, doors: "####################################################################################################" },
        { pass: 1, doors: "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" },
        { pass: 2, doors: "#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@" },
        { pass: 3, doors: "##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@##@#" },
        { pass: 6, doors: "#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@#####@####" },
        { pass: 50, doors: "#################################################@#################################################@" },
    ])("returns every $pass'th door open", ({ pass, doors }) => {
        expect(getDoors(pass)).toBe(doors);
    })

    test.for([
        { passCount: 2 , count: 10, doors: "@#@#@#@#@#" },
        { passCount: 3 , count: 10, doors: "@###@@@###" },
        { passCount: 100, count: 100, doors: "@##@####@######@########@##########@############@##############@################@##################@" },
    ])("returns first $count correct doors for $passCount passes", ({ count, passCount, doors }) => {
        expect(getDoorsAfterPasses(passCount).substring(0, count)).toBe(doors);
    })
})
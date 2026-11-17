import { expect, test } from "vitest";

test.for([
    { birthdate: "18/09/2004", targetDate: "17/11/2026", expected: 22 },
    { birthdate: "29/02/2004", targetDate: "28/02/2026", expected: 21 },
    { birthdate: "01/01/2004", targetDate: "01/01/2004", expected: 0  },
    { birthdate: "01/01/2004", targetDate: "02/01/2004", expected: 0  },
    { birthdate: "01/01/2004", targetDate: "01/01/2005", expected: 1  },
])("should return $expected for someone born in $birthdate at $targetDate", ({ birthdate, targetDate, expected }) => {
    expect(calculateAge(birthdate, targetDate)).toBe(expected);
})
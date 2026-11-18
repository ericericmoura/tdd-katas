import { describe, expect, test } from "vitest";
import { calculateAge, calculateBirthdayWeek } from "./age_calculator.js";

test.for([
    { birthdate: "18/09/2004", targetDate: "17/11/2026", expected: 22      },
    { birthdate: "29/02/2004", targetDate: "28/02/2026", expected: 21      },
    { birthdate: "29/02/2004", targetDate: "01/03/2026", expected: 22      },
    { birthdate: "01/01/2004", targetDate: "01/01/2004", expected: 0       },
    { birthdate: "01/01/2004", targetDate: "02/01/2004", expected: 0       },
    { birthdate: "01/01/2004", targetDate: "01/01/2005", expected: 1       },
    { birthdate: "17/11/2026", targetDate: "18/09/2004", expected: "error" },
])("should return $expected for someone born in $birthdate at $targetDate", ({ birthdate, targetDate, expected }) => {
    expect(calculateAge(birthdate, targetDate)).toBe(expected);
})

describe("Calculate birthday week", () => {
    test.for([
        { birthdate: "09/09/2017", birthdayWeek: "03/09/2017" },
        { birthdate: "03/09/2017", birthdayWeek: "28/08/2017" },
        { birthdate: "05/09/2017", birthdayWeek: "30/08/2017" },
        
        { birthdate: "08/09/2017", birthdayWeek: "03/09/2017" },
        { birthdate: "07/09/2017", birthdayWeek: "03/09/2017" },
        { birthdate: "06/09/2017", birthdayWeek: "31/08/2017" },
    ])("should return start of birthday week $birthdayWeek for someone born in $birthdate", ({ birthdate, birthdayWeek }) => {
        expect(calculateBirthdayWeek(birthdate)).toBe(birthdayWeek);
    })
})
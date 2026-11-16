type aloudNumber = "error" | "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine";

export const numberToWord = (digit: number): aloudNumber => {
    switch (digit) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
    }
    return "error";
}

export const wordToNumber = (word: string): number => {
    switch (word) {
        case "one": return 1;
        case "two": return 2;
        case "three": return 3;
        case "four": return 4;
        case "five": return 5;
        case "six": return 6;
        case "seven": return 7;
        case "eight": return 8;
        case "nine": return 9;
    }
    return 0;
}

export const readAloud = (term: string): string => {
    let aloudNumbers: string[] = [];

    let lastDigit: string = "";
    for (let i = 0; i < term.length; i++) {
        const digit = term[i];

        if (lastDigit === digit) continue;
        lastDigit = digit!;

        let count: number = 0;
        for (let j = i; j < term.length; j++) {
            if (term[j] === digit) count++;
            else break;
        }

        const word : aloudNumber = numberToWord(count); 
        aloudNumbers.push(`${word} ${word === "one" ? String(digit) : String(digit) + 's'}`);
    }
    return aloudNumbers.join(", ");
}

export const lookAndSay = (term: string, iterations: number): string => {
    const numbers = readAloud(term).split(" ");

    if (numbers.length < 2) {
        console.error("something went wrong while parsing the term");
        return "";
    }

    let resultingTerm: string = "";

    for (let i = 0; i < numbers.length - 1; i += 2) {
        const firstNum = wordToNumber(numbers[i]!);
        const secondNum = numbers[i + 1]!.replace("s", "").replace(",", "");
        resultingTerm += `${firstNum}${secondNum}`;
    }

    if (iterations > 1) {
        return lookAndSay(resultingTerm, iterations - 1);
    }

    return resultingTerm;
}
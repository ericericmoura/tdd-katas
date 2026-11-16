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

export const countDigits = (term: string): Map<string, number> => {
    const countMap = new Map<string, number>();
    for (const digit of term) {
        let digitCount = countMap.get(digit);
        if (!digitCount) {
            digitCount = 0;
        }
        countMap.set(digit, digitCount + 1);
    }
    return countMap;
}

export const readAloud = (term: string): string => {
    let aloudNumbers: string[] = [];
    const countMap = countDigits(term);    
    for (const [digit, count] of countMap) {
        const word  = numberToWord(Number(count));
        aloudNumbers.push(`${word} ${word === "one" ? String(digit) : String(digit) + 's'}`);
    }
    return aloudNumbers.join(", ");
}

type BalanceResult = "OK" | "FAIL";

export const isBalanced = (brackets: string): BalanceResult => {
    if (brackets.trim() === "") return "FAIL";

    let depth: number = 0;
    for (const bracket of brackets) {
        if      (bracket === "[") depth++;
        else if (bracket === "]") depth--;

        if (depth < 0) return "FAIL";
    }
    return depth === 0 ? "OK" : "FAIL";
};
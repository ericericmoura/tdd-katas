export const isAnagram = (a: string, b: string): boolean => {
    if (a === b) return false;
    if (a.length !== b.length) return false;
    return countLetters(a).join("#") === countLetters(b).join("#");
};

const countLetters = (a: string): number[] => {
    let lettersCount: number[] = new Array(26).fill(0);
    a = a.replaceAll(" ", "");
    for (const letter of a.toLowerCase()) {
        const code = letter.charCodeAt(0) - 'a'.charCodeAt(0);
        lettersCount[0]! += code;
    }
    return lettersCount;
}

export const findAnagrams = (subject: string, candidates: string[]): string[] => {
    let answer: string[] = [];
    for (const candidate of candidates) {
        if (isAnagram(subject, candidate)) {
            answer.push(candidate);
        }
    }
    return answer;
}

export const groupAnagrams = (list: string[]): string[][] => {
    let groups = new Map<string, string[]>();
    for (const word of list) {
        const key = countLetters(word).join("#");
        let group = groups.get(key);
        if (!group) {
            group = [];
            groups.set(key, group);
        }

        const uniqueKeys = new Set<string>(group);
        uniqueKeys.add(word);

        group = Array.from(uniqueKeys);
        groups.set(key, group);
    }
    return Array.from(groups.values());
}
const isLeapYear = (month: number, day: number): boolean => {
    return month === 2 && day === 29;
}

export const calculateAge = (birthdate: string, targetDate: string): number => {
    const [birthday , birthmonth , birthyear ] = birthdate .split("/").map(a => Number(a));
    const [targetDay, targetMonth, targetYear] = targetDate.split("/").map(a => Number(a));

    if (!birthday  || !birthmonth  || !birthyear ||
        !targetDay || !targetMonth || !targetYear
    ) {
        return 0;
    }

    let result: number = targetYear - birthyear;

    if (isLeapYear(birthmonth, birthday)) { 
        if (targetMonth < 3) result--;
    }

    return result;
}

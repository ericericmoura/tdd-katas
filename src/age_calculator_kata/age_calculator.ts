const isLeapYear = (month: number, day: number): boolean => {
    return month === 2 && day === 29;
}

const parseDateFromString = (date: string): {day: number, month: number, year: number} => {
    const [day, month, year] = date.split("/").map(a => Number(a));
    if (!day || !month || !year) throw new Error(`Invalid date provided: ${date}`);
    return {day, month, year};
}

export const calculateAge = (birthdate: string, targetDate: string): number | "error" => {
    const {day: birthday , month: birthmonth , year: birthyear } = parseDateFromString(birthdate );
    const {day: targetDay, month: targetMonth, year: targetYear} = parseDateFromString(targetDate);

    const wasBornInFuture = birthyear > targetYear
        || (birthyear === targetYear && birthmonth > targetMonth)
        || (birthyear === targetYear && birthmonth === targetMonth && birthday > targetDay);
    if (wasBornInFuture) {
        return "error";
    }

    let result: number = targetYear - birthyear;

    if (isLeapYear(birthmonth, birthday)) {
        if (targetMonth < 3) result--;
    }

    return result;
}

export const calculateBirthdayWeek = (birthdate: string): string => {
    const {day, month, year} = parseDateFromString(birthdate);

    const date         = new Date(year, month-1, day);
    const dayOfTheWeek = date.getDay();    

    let numberOfDaysToSubtract = 6;

    if (dayOfTheWeek >= 4) { // Thursday-Saturday
        numberOfDaysToSubtract = dayOfTheWeek;
    }

    let targetDay   = day - numberOfDaysToSubtract;    
    let targetMonth = month;
    let targetYear  = year;

    let diff = Math.abs(targetDay);

    if (targetDay <= 0) {
        targetMonth--;
        if (targetMonth <= 0) {
            targetYear--;
            targetMonth = 12;
        }
        targetDay = new Date(targetYear, targetMonth, 0).getDate() - diff;
    }

    const outDay   = String(targetDay  ).padStart(2, '0');
    const outMonth = String(targetMonth).padStart(2, '0');

    return `${outDay}/${outMonth}/${targetYear}`;
}
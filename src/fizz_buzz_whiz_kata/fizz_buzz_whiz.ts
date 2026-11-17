import { isPrime } from "../utils/is_prime.js";

type fizzBuzzReturn     = "Fizz" | "Buzz" | "FizzBuzz" | number;
type fizzBuzzWhizReturn = fizzBuzzReturn | "Whiz" | "FizzWhiz" | "BuzzWhiz";

export const fizzBuzz = (num: number): fizzBuzzReturn => { 
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3  === 0) return "Fizz";
    if (num % 5  === 0) return "Buzz";
    return num;
}

export const fizzBuzzWhiz = (num: number): fizzBuzzWhizReturn => {
    const result = fizzBuzz(num);
    if (result === "FizzBuzz") return result;
    
    const primeNum: boolean = isPrime(num);
    
    if (primeNum && typeof result === "number") return "Whiz";
    if (primeNum) return (result + "Whiz") as fizzBuzzWhizReturn;

    return result;
}
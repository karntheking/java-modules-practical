// mathModule.js
import { toUpperCase } from "./stringModule";

// addition function
export function add(a, b) {
    return a + b;
  }

// subtraction function
  export function subtract(a, b) {
    return a - b;
  }
// multiply function
  export default function multiply(a, b) {
    return a * b;
  }

// combined function
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}
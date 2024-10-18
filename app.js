// app.js
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';

// Call the functions and log results
console.log('Addition: ', add(8, 4));  
console.log('Subtract: ', subtract(77, 7));  
console.log('Multiply:', multiply(6, 6));
console.log('Uppercase: ', toUpperCase('hello, how are you'));  
console.log('Lowercase: ', toLowerCase('KARN'));
console.log('Max: ', findMax([1, 2, 3, 4, 5, 66, 77]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray
addAndLogUpper(10, 20); // Test combined function

// creating second combined function 
function findMaxAndMultiplyThenUpper(arr, multiplier) {
    const max = findMax(arr);
    const product = multiply(max, multiplier);
    const result = toUpperCase(product.toString());
    console.log(result);
  }

  // testing second combined function 
  findMaxAndMultiplyThenUpper([1, 2, 3, 4, 5], 2);
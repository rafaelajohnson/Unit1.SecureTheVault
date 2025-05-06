//  1 - Declare code1
let code1;

// 2 - Assign code1 to an expression that evaluates to 10. Use the numbers 7 and 3 and an arithmetic operator.
code1 = 7 + 3;

// 3 - Declare and initialize code2 to 40 using subtraction and division
let code2 = (100 - 20) / 2;

// 4 -  Declare and initialize code3 to 39 using at least one modulo operator
let code3 = (40 * 2) - (1 % 7);

// 5 -  Initialize message
let message = "The vault has been secured. The combination is:";

// 6 - Create codeA using string concatenation
let codeA = code1 + "-" + code2 + "-" + code3;

// 7 -  Create codeB using a template literal
let codeB = `${code1}-${code2}-${code3}`;

// 8 - Use console.log to print message, codeA, and codeB to the browser console.
console.log(message);
console.log(codeA);
console.log(codeB);

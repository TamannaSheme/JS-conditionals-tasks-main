
let num1 = 10; // example values
let num2 = 5;
let result;

// Using if-else
if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}
console.log(result);

// Using ternary operator
result = (num1 > num2) ? (num1 * 2) : (num1 + num2);
console.log(result);

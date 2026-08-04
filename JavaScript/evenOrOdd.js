// Prompt user to enter the first number and convert the string to a number
let num1 = parseInt(prompt("Enter a number between 1 and 100."));

// checks if number is invalid, 1<=num1<=100, continues to ask until appropriate answer is given
while (isNaN(num1) || num1 < 1 || num1 > 100) {
    alert("Invalid, enter a whole number between 1 and 100.");
    num1 = parseInt(prompt("Enter a number between 1 and 100."));
}

// Prompt for the second number and convert the string to a number
let num2 = parseInt(prompt("Enter a number between 15 and 40."));

// checks if number is invalid, 15<=num2<=40, continues to ask until appropriate answer is given
while (isNaN(num2) || num2 < 15 || num2 > 40) {
    alert("Invalid, enter a whole number between 15 and 40.");
    num2 = parseInt(prompt("Enter a number between 15 and 40."));
}

// Multiply the numbers
let product = num1 * num2;

// Determine whether the result is even or odd, by dividing product by 2
// if remainder is 0, it's even
if (product % 2 === 0) {
    console.log("The result is " + product + ". It is even.");
} else {
    console.log("The result is " + product + ". It is odd.");
}

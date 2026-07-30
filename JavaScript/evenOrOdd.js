// Prompt user to enter the first number
let input1 = prompt("Enter a number between 1 and 100.");

// checks if number is invalid, 1<=input1<=100,  coninues to ask until appropriate answer is given
while (isNaN(input1) || parseInt(input1) < 1 || parseInt(input1) > 100) {
    alert("Invalid, enter a whole number between 1 and 100.");
    input1 = prompt("Enter a number between 1 and 100.");
}

// Prompt for the second number
let input2 = prompt("Enter a number between 15 and 40.");

// checks if number is invalid, 15<=input2<=40, continues to ask until appropriate answer is given
while (isNaN(input2) || parseInt(input2) < 15 || parseInt(input2) > 40) {
    alert("Invalid, enter a whole number between 15 and 40.");
    input2 = prompt("Enter a number between 15 and 40.");
}

// Convert the string inputs to numbers
let num1 = parseInt(input1);
let num2 = parseInt(input2);

// Multiply the numbers
let product = num1 * num2;

// Determine whether the result is even or odd, by dividing prduct by 2 if remainder is 0, its even
if (product % 2 === 0) {
    console.log("The result is " + product + ". It is even.");
} else {
    console.log("The result is " + product + ". It is odd.");
}
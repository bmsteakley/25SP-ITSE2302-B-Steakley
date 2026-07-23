// create 3 variables storing assigned sentences
let sentence1 ="Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";

let sentence2 ="The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";

let sentence3 ="This summer they plan on traveling to El Paso to visit as many family members as possible.";


// Extract the numerical strings from sentence1 using match(); The match() method returns an array with the matches.
let sentence1Num = sentence1.match(/\d+/g);

let num1 = sentence1Num[0];  // "5"
let num2 = sentence1Num[1]; // "4"
let num3 = sentence1Num[2];  // "1"


// Extract the numerical strings from sentence2 using match();
let sentence2Num = sentence2.match(/\d+/g);
//"\d" = find a digit; "+" = find one or more digits together; "g" = find every match in the sentence

let num4 = sentence2Num[0]; // "6"
let num5 = sentence2Num[1];  // "2"
let num6 = sentence2Num[2];  // "100"


// Extract 10 and 0 from the string 100, store them in 2 new variables, num10 and num0
let num10 = num6.substring(0, 2);  // "10"
let num0 = num6.substring(2);    // "0"


// Convert all extracted numerical strings into actual numbers; parseInt() converts a string to an integer
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);
num3 = parseInt(num3, 10);
num4 = parseInt(num4, 10);
num5 = parseInt(num5, 10);
num6 = parseInt(num6, 10);
num10 = parseInt(num10, 10);
num0 = parseInt(num0, 10);


// Add 5, 4, 1, 6, 2, and 10
let sumTotal = num1 + num2 + num3 + num4 + num5 + num10;


// Display the sum using concatenation
console.log("The variable sumTotal is storing " + sumTotal);


// Extract "San Antonio" from sentence2; indexOf() method returns the position of the first occurrence of a value in a string
let cityStart = sentence2.indexOf("San Antonio");

let city = sentence2.substring(cityStart, cityStart + "San Antonio".length);

// Replace "El Paso" with the extracted city
//The replace() method searches a string for a value or a regular expression, returns a new string with the value(s) replaced, and does not change the original string
sentence3 = sentence3.replace("El Paso", city);

// Display the changed sentence
console.log(sentence3);


// Use the variables storing 1 and 10 in a while loop to display the amount of cars seen on a trip, will continue to display until counter reaches 10 cars
let counter = num3;

while (counter <= num10) {
  console.log("I saw " + counter + " car(s) on my trip.");
  counter++;
}
// array: Pomodoro Timer, Tasks, Productivity, Goals, Rewards
let siteTopics = ["Pomodoro Timer", "Tasks", "Productivity", "Goals", "Rewards"];

// array with days of the week, starting with monday
let dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

// my first name variable
let firstName = "Brianna";

// year I was born variable
let birthYear = 2006; 


// Add a value to the end of the siteTopics array
siteTopics.push("Study Sessions");


// Display the length of the siteTopics array using concatenation
console.log("The length of the siteTopics array is " + siteTopics.length);


// Display each value in siteTopics using a while loop
let i = 0;

while (i < siteTopics.length) {
    console.log(siteTopics[i]);
    i++;
}


// Reverse the dayNames array
dayNames.reverse();

// Print out the dayNames using a for loop
for (let i = 0; i < dayNames.length; i++) {
    console.log(dayNames[i]);
}


// Try/catch/finally block
try {

    // Check if the first value is Sunday
    if (dayNames[0] === "Sunday") {
        throw "Error: Sunday should be missing!";
    }

} catch (error) {

    // Display thrown error message
    console.log(error);

} finally {

    // Remove Sunday
    dayNames.shift();

    // Display final message
    console.log(
        firstName + " was born in the year " + birthYear +
        ". I think the day was either a " + dayNames[1] +
        " or " + dayNames[3] + "."
    );
}
// CHANGE THE INTRO PARAGRAPH
// Select the paragraph with class "intro"
let introParagraph = document.querySelector(".intro p");

// Change text to inspirational paragraph
introParagraph.textContent =
    "The most important thing in life is finding happiness. " +
    "We all chase something specific to achieve this. " +
    "Some chase their dreams, careers, family, and some just go with the flow. " +
    "But no matter what, never give up on your won happiness. " +
    "Stay smiley!";


// CHANGE THE THREE IMAGES
// first image 
let firstImage = document.querySelector("#firstImage");
// second image 
let secondImage = document.querySelector("#secondImage");
// image 
let thirdImage = document.querySelector("#thirdImage");


// Change first image
firstImage.src = "Images/smile.jpg";


// Change second image
secondImage.src = "Images/family.jpg";


//Change third image
thirdImage.src = "Images/fun.jpg";


// CHANGE THE THREE IMAGE HEADINGS

// querySelectorAll() creates a list of all three headings
let imageHeadings = document.querySelectorAll(".content-title");


// Change first image heading
// JavaScript arrays start counting at 0
imageHeadings[0].textContent = "Start With A Smile";


// Change second image heading
imageHeadings[1].textContent = "Find Those You Love";


// Change third image heading
imageHeadings[2].textContent = "Enjoy Every Moment";


// CHANGE THE THREE IMAGE PARAGRAPHS

// Select paragraph under first image
let firstText = document.querySelector("#firstText");

// Select paragraph under second image
let secondText = document.querySelector("#secondText");

// Select paragraph under third image
let thirdText = document.querySelector("#thirdText");


// Change text
firstText.textContent =
    "Take a positive outlook on the day by truning that frown upside down. ";
secondText.textContent =
    "Keep your family close as you go on a new journey.";
thirdText.textContent =
    "Don't forget to stop and enjoy the little things. ";


// HEADER COLOR CHANGING BUTTONS
// Select the webpage header
let header = document.querySelector(".headings");
let firstButton = document.querySelector("#ColorChanging");
let secondButton = document.querySelector("#ColorChanged");
let thirdButton = document.querySelector("#ColorChange");


// FUNCTION FOR THE FIRST BUTTON
// This function changes the header background and text colors when button is clicked
function changeHeaderFirstColor() {
    // Change the header background color
    header.style.backgroundColor = "#6C63FF";
    // Change the header text color so it contrasts with the background
    header.style.color = "white";
}


// FUNCTION FOR THE SECOND BUTTON
function changeHeaderSecondColor() {
    // Change the header background color
    header.style.backgroundColor = "#FF6973";
    header.style.color = "white";
}


// FUNCTION FOR THE THIRD BUTTON
function changeHeaderThirdColor() {
    header.style.backgroundColor = "#008C95";
    header.style.color = "white";
}


// EVENT LISTENERS
// Listen for a click on the  button
// When clicked, run the corresponding function for each button
firstButton.addEventListener("click", changeHeaderFirstColor);
secondButton.addEventListener("click", changeHeaderSecondColor);
thirdButton.addEventListener("click", changeHeaderThirdColor);
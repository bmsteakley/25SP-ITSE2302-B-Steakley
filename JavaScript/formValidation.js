// Get the form
let contactForm = document.getElementById("contactForm");

// Listen for the form submit event
contactForm.addEventListener("submit", handleFormSubmit);


// Function 1: Prevents page from reloading, validates form, calculates total, and displays form info.
function handleFormSubmit(event) {

    //stop reload
    event.preventDefault();

    // Call validation function
    let isValid = validateForm();

    // Stop function if validation fails
    if (isValid == false) {
        return;
    }

    // Call calculation function and store returned total
    let total = calculateTotal();

    // Get form values: name, email, reason, message
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let contactReason = document.getElementById("contactReason").value;
    let message = document.getElementById("message").value;

    // Get selected radio button
    let heardFrom = document.querySelector('input[name="heardFrom"]:checked');
    //if no option selected
    if (heardFrom != null) {
        heardFrom = heardFrom.value;
    }
    else {
        heardFrom = "No option selected";
    }

    // Display form values in the console
    console.log("First Name: " + firstName);
    console.log("Email: " + email);
    console.log("How did you hear about us?: " + heardFrom);
    console.log("Reason for Contact: " + contactReason);
    console.log("Message: " + message);

    // Display selected purchase items
    let selectedItems = document.querySelectorAll('input[name="items"]:checked');

    for (let i = 0; i < selectedItems.length; i++) {
        console.log("Selected Item: " + selectedItems[i].id +
                    " - $" + selectedItems[i].value);
    }

    // Display calculated total
    console.log("Purchase Total: $" + total.toFixed(2));
}


// Function 2: Validates the required text inputs.
function validateForm() {

    let firstName = document.getElementById("firstName");
    let email = document.getElementById("email");

    // Check first name
    if (firstName.value == "") {
        alert("First Name is empty. Please enter your first name.");
        firstName.focus();

        return false;
    }

    // Check email
    if (email.value == "") {
        alert("Email is empty. Please enter your email.");
        email.focus();

        return false;
    }

    // Validation successful
    return true;
}


// Function 3: Calculates total price of all checked purchase items.
function calculateTotal() {

    let total = 0;

    // Get all checked purchase checkboxes
    let selectedItems = document.querySelectorAll('input[name="items"]:checked');

    // Add each selected item's price to the total
    for (let i = 0; i < selectedItems.length; i++) {
        total += parseFloat(selectedItems[i].value);
    }

    // Return calculated total
    return total;
}
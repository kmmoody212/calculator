
const numButtons = document.querySelectorAll(".num");
const opsButtons = document.querySelectorAll(".ops")
const input = document.getElementById('input');
let currentValue = ''; // variable to represent current value displayed
let previousValue = ''; // variable that will save previous value in input field
let opsValue = ''; // variable to store selected operator
let opEntered = false; // variable to help with operator visibility without appending numbers to operator

// FOR CALCULATOR "DISPLAY" >>
// Loops through each button and adds an event listener that,
//  when clicked, shows the number/operator on the button as the input's value

numButtons.forEach(button => {
    button.addEventListener("click", function () {
    let numValue = button.value;

    if (opEntered) {
        input.value = ''; // set "display" to blank
        opEntered = false; // reset opEntered to false
    }

      return input.value += numValue ; // to append results, not replace
    });
});

opsButtons.forEach(button => {
    button.addEventListener("click", function () {
    // save current input in a variable (previousValue)
     previousValue = parseFloat(input.value); // convert input value from str to num
     console.log(previousValue); // test to confirm it does store the previous value
     // input field to display operator and store in a variable (opsValue)
     opsValue = button.value;
     input.value = opsValue;
     console.log(opsValue); // test to confirm it does store the operator
     opEntered = true; // will tell the number buttons to clear display if an operator was entered
       
    });
});



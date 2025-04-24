
const numButtons = document.querySelectorAll(".num");
const opsButtons = document.querySelectorAll(".ops")
const input = document.getElementById('input');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
let previousValue = ''; // variable that will save previous value in input field
let opsValue = ''; // variable to store selected operator
let opEntered = false; // variable to help with operator visibility without appending numbers to operator
let operator = '';
let currentNum = '';
let prevNumEntered = false;
let sum = 0;
let result = 0;


// CALCULATOR FUNCTION
function operate(firstNum, operator, secondNum){
    if (operator === "+") {
        sum = parseFloat(firstNum + secondNum);
        if (Number.isInteger(sum)) {
        return sum;   
        } else {
        return sum.toFixed(2);
        }
    } else if (operator === "-") {
        sum = parseFloat(firstNum - secondNum);
        if (Number.isInteger(sum)) {
            return sum;   
            } else {
            return sum.toFixed(2);
            }
    } else if (operator === "*") {
        sum = parseFloat(firstNum * secondNum);
        if (Number.isInteger(sum)) {
            return sum;   
            } else {
            return sum.toFixed(2);
            }
    } else if (operator === "/") {
        if (secondNum === 0) {
            input.classList.add("smaller-text");
            input.value = input.defaultValue;
            return input.value = "You can't divide by zero! >_<"
        }
        sum = parseFloat(firstNum / secondNum);
        if (Number.isInteger(sum)) {
            return sum;   
            } else {
            return sum.toFixed(2);
            }
    }

}

// FOR CALCULATOR "DISPLAY" >>
// Loops through each button and adds an event listener

// /////////////// NUMBER BUTTONS /////////////////////////
numButtons.forEach(button => {
    button.addEventListener("click", function () {
    let numValue = button.value;
    input.classList.remove("smaller-text"); // if this class was added, remove it
    // if the last button clicked was an operator :
    if (opEntered) {
        input.value = ''; // if operator is on display, clear the display
        opEntered = false; // reset opEntered to false so more number buttons can be clicked
        console.log(`With opEntered true, the previous value is ` + previousValue);
    }
    return input.value += numValue ; // appends button value in input field, not replace
    });
});

// //////////////////// OPERATOR BUTTONS //////////////////
opsButtons.forEach(button => {
    button.addEventListener("click", function () {
    input.classList.remove("smaller-text"); // if this class was added, remove it
    if (input.value === "") { // if the input.value is blank set previousValue to zero
        previousValue = 0;
    } else if (prevNumEntered) { // if a previous number was entered
        currentNum = parseFloat(input.value); // save the input value as currentNum
        result = operate(previousValue, opsValue, currentNum); // save the operate function answer to result
        console.log(`The result after clicking an operator button is ` + result) // testing
        previousValue = result; // now previousValue variable will be the number in result
    } else {
        previousValue = parseFloat(input.value); // previousValue stores whatever was just in the input field
    }
    console.log(`The value that was just on the screen is ` + input.value); // testing
    prevNumEntered = true; // set to true now that there is a previous value stored
    opEntered = true;
    opsValue = button.value; // opsValue stores this button's value that was just clicked
    return input.value = previousValue + " " + opsValue; // input.value will now show the opsValue - replacing number shown
});
});

// /////////////////// EQUALS BUTTON /////////////////////
equals.addEventListener("click", () => {
    if (input.value === opsValue) {
        currentNum = 0;
        result = operate(previousValue, opsValue, currentNum);
        console.log(`You didn't use a number just then so your answer is just ` + result);
    } else {
        currentNum = parseFloat(input.value); // save the input value as currentNum
        result = operate(previousValue, opsValue, currentNum); // save the operate function answer to result
        console.log(`The total calculation equals ` + result);
    }
    opEntered = true;
    prevNumEntered = false;
    return input.value = result;
})

// /////////////////// CLEAR BUTTON //////////////////////
clear.addEventListener("click", () => {
    input.classList.remove("smaller-text");
    return input.value = input.defaultValue;
})

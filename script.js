
const numButtons = document.querySelectorAll(".num");
const opsButtons = document.querySelectorAll(".ops")
const input = document.getElementById('input');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
let previousValue = ''; // variable that will save previous value in input field
let opsValue = ''; // variable to store selected operator
let opEntered = false; // variable to help with operator visibility without appending numbers to operator
let firstNum = '';
let operator = '';
let currentNum = '';
let prevNumEntered = false;
let sum = 0;
let result = 0;

// CALCULATOR FUNCTION
function operate(firstNum, operator, secondNum){
    if (operator === "+") {
        sum = parseFloat(firstNum + secondNum);
        return sum;
    } else if (operator === "-") {
        sum = parseFloat(firstNum - secondNum);
        return sum;
    } else if (operator === "*") {
        sum = parseFloat(firstNum * secondNum);
        return sum;
    } else if (operator === "/") {
        sum = parseFloat(firstNum / secondNum);
        return sum;;
    }

}
// FOR CALCULATOR "DISPLAY" >>
// Loops through each button and adds an event listener

// /////////////// NUMBER BUTTONS /////////////////////////
numButtons.forEach(button => {
    button.addEventListener("click", function () {
    let numValue = button.value;
    // if (opEntered) {
    //     if (previousValue !== "") {
    //         firstNum = previousValue; // store previousVal in new variable so it doesn't change on next ops click
    //         operator = opsValue; // store previous opsValue in new variable for operate function
    //         // firstNumEntered = true;
    //         // console.log(firstNum, operator); // test that intended values are stored
    //         }
    //     input.value = ''; // set "display" to blank
    //     opEntered = false; // reset opEntered to false
    // }

    // if the last button clicked was an operator :
    if (opEntered) {
        input.value = ''; // if operator is on display, clear the display
        opEntered = false; // reset opEntered to false so more number buttons can be clicked
        console.log(previousValue);
    }

    return input.value += numValue ; // appends button value in input field, not replace

    });
});
// //////////////////// OPERATOR BUTTONS //////////////////
opsButtons.forEach(button => {
    button.addEventListener("click", function () {

    //     if (input.value === "") {
    //         previousValue = 0; // if the input value is blank, then previousValue = 0
    //     } else {// save current input in a variable (previousValue)
    //     previousValue = parseFloat(input.value); // convert input value from str to num
    // // input field to display operator and store in a variable (opsValue)
    //  opsValue = button.value;
    //  input.value = opsValue;
    // //  console.log(opsValue); // test to confirm it does store the operator
    //  opEntered = true; // will tell the number buttons to clear display if an operator was entered
    // //    console.log(previousValue); // test to confirm it does store the previous value  
    // }
    if (input.value === "") { // if the input.value is blank set previousValue to zero
        previousValue = 0;
    } else if (prevNumEntered) { // if a previous number was entered
        currentNum = parseFloat(input.value); // save the input value as currentNum
        result = operate(previousValue, opsValue, currentNum); // save the operate function answer to result
        console.log(`The result is ` + result) // testing
        previousValue = result; // now previousValue variable will be the number in result
    } else {
        previousValue = parseFloat(input.value); // previousValue stores whatever was just in the input field
    }
    console.log(`The value that was just on the screen is ` + input.value); // testing
    prevNumEntered = true; // set to true now that there is a previous value stored
    opEntered = true;
    opsValue = button.value; // opsValue stores this button's value that was just clicked
    return input.value = opsValue; // input.value will now show the opsValue - replacing number shown
});
});

// /////////////////// EQUALS BUTTON /////////////////////
equals.addEventListener("click", () => {
    if (input.value === opsValue) {
        currentNum = 0;
        result = (input.value = operate(previousValue, opsValue, currentNum));
        
        console.log(`You didn't use a number just then so your answer is ` + previousValue);
    } else {
        currentNum = parseFloat(input.value); // save the input value as currentNum
        result = operate(previousValue, opsValue, currentNum); // save the operate function answer to result
        previousValue = result; // now previousValue variable will be the number in result
        console.log(`The total calculation equals ` + previousValue);
    }
    return input.value = result;
    
    // opEntered = true;
    // let result = (input.value = operate(previousValue, operator, currentNum));
    // return result;
   
})

// /////////////////// CLEAR BUTTON //////////////////////
clear.addEventListener("click", () => {
    return input.value = input.defaultValue;

})

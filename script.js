
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
let firstNumEntered = false;
let sum = 0;

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
// Loops through each button and adds an event listener that,
//  when clicked, shows the number/operator on the button as the input's value

// /////////////// NUMBER BUTTONS /////////////////////////
numButtons.forEach(button => {
    button.addEventListener("click", function () {
    let numValue = button.value;

    if (opEntered) {
        if (previousValue !== "") {
            firstNum = previousValue; // store previousVal in new variable so it doesn't change on next ops click
            operator = opsValue; // store previous opsValue in new variable for operate function
            firstNumEntered = true;
            // console.log(firstNum, operator); // test that intended values are stored
            }
        input.value = ''; // set "display" to blank
        opEntered = false; // reset opEntered to false
    }

      return input.value += numValue ; // to append results, not replace
    });
});
// //////////////////// OPERATOR BUTTONS //////////////////
opsButtons.forEach(button => {
    button.addEventListener("click", function () {

        if (input.value === "") {
            previousValue = 0;
        } else {// save current input in a variable (previousValue)
        previousValue = parseFloat(input.value); // convert input value from str to num
        }
        
    
   
     // input field to display operator and store in a variable (opsValue)
     opsValue = button.value;
     input.value = opsValue;
    //  console.log(opsValue); // test to confirm it does store the operator
     opEntered = true; // will tell the number buttons to clear display if an operator was entered
    //    console.log(previousValue); // test to confirm it does store the previous value  
    });
});

// /////////////////// EQUALS BUTTON /////////////////////
equals.addEventListener("click", () => {
    currentNum = parseFloat(input.value);
    opEntered = true;
    
    if (firstNumEntered) {
        let result = (input.value = operate(previousValue, operator, currentNum));
        return result;
    }
})

// /////////////////// CLEAR BUTTON //////////////////////
clear.addEventListener("click", () => {
    return input.value = input.defaultValue;

})

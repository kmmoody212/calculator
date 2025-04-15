// loop through each button and add an event listener that,
//  when clicked, shows the number/symbol on the button as the input's value
const numButtons = document.querySelectorAll(".num");
const opsButtons = document.querySelectorAll(".ops")
const input = document.getElementById('input');
let currentValue = ''; // variable to represent current value displayed
let previousValue = ''; // variable that will save previous value in input field
const operator = this.dataset.operator; // for buttons given a data-operator attribute

// TO GET THE BUTTONS' "CONTENT" TO SHOW IN THE INPUT

numButtons.forEach(button => {
    button.addEventListener("click", function () {
    let numValue = parseInt(button.value); // convert button value to a number
       input.value += numValue ; // shortcut to append results, not replace
    });
});

opsButtons.forEach(button => {
    button.addEventListener("click", function () {
     previousValue = input.value;
     console.log(previousValue); // confirms it does display the previous value
     
     input.value = button.textContent; // replaces input value with ops buttons

       
    });
});

// when operator is pressed, it is appended to the preivous value


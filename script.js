// loop through each button and add an event listener that,
//  when clicked, shows the number/symbol on the button as the input's value
let buttons = document.querySelectorAll("button");
let input = document.getElementById('input');

buttons.forEach(button => {
    button.addEventListener("click", function () {
       input.value += button.textContent ; // shortcut to append results, not replace
    });
});

//You should store the content of the display
// (the number) in a variable for use in the next step

// Create a new function operate that takes an operator and two numbers
//  and then calls one of the above functions on the numbers.
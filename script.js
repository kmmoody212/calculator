// loop through each button and add an event listener that,
//  when clicked, shows the number/symbol on the button as the input's value
const numButtons = document.querySelectorAll(".num");
const opsButtons = document.querySelectorAll(".ops")
const input = document.getElementById('input');
let previousValue = 0; // variable that will save previous value in input field


numButtons.forEach(button => {
    button.addEventListener("click", function () {
       input.value += button.textContent ; // shortcut to append results, not replace

    });
});

opsButtons.forEach(button => {
    button.addEventListener("click", function () {
     previousValue = input.value;
     input.value = button.textContent; // replaces input value with ops buttons

       console.log(previousValue); // confirms it does display the previous value
    });
});
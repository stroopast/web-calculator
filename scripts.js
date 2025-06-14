let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector(".display");
const buttonsContainer = document.querySelector(".buttons-container");
const buttons = buttonsContainer.querySelectorAll("button.small-button, button.large-button");

buttons.forEach((button) => {
  button.addEventListener('click',(event) => {
    display.textContent = button.textContent;
  });
});

display.textContent = "?";

function operate(op, a, b)
{
    switch(op)
    {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            break;
    }
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if(b == 0)
    {
        return NaN;
    }

    return a / b;
}
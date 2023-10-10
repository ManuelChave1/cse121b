/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const result = add(num1, num2);
    document.getElementById('sum').textContent = result;
}
document.getElementById('addNumbers').addEventListener('click', addNumbers);


/*function addNumbers(){
    let addNumbers1 = Number(document.querySelector('#add1').value)
    let addNumbers2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumbers1 , addNumbers2);
    
}
document.querySelector("#addNumbers").addEventListener('click',addNumbers);


/* LESSON 3 - Programming Tasks */
// Get references to the HTML elements

/* FUNCTIONS */
/* Function Definition - Add Numbers */


function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers(){
    let addNumbers1 = Number(document.querySelector('#add1').value)
    let addNumbers2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumbers1 , addNumbers2);
    
}
document.querySelector("#addNumbers").addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  };

function subtractNumbers(){
    subtractNumbers1 = Number(document.querySelector('#subtract1').value) 
    subtractNumbers2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = subtract(subtractNumbers1, subtractNumbers2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(){
factor1 = Number(document.querySelector('#factor1').value);
factor2 = Number(document.querySelector('#factor2').value)
document.querySelector('#product').value = multiply( factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers)


/* Open Function Use - Divide Numbers */
function divide (divide1, divide2) {
    return divide1 / divide2 ;
}
function divideNumbers(){
    dividend = Number(document.querySelector('#dividend').value)
    divisor = Number(document.querySelector('#divisor').value)
    document.querySelector('#quotient').value = divide(dividend , divisor)
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
var currentDate = new Date();
var currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray
  .map(number => number * 2)
  .reduce((sum, number) => sum + number, 0);


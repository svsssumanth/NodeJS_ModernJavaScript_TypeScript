"use strict";
const num1Element = document.getElementById('num1'); // this is typecasting
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
//const buttonElement = document.querySelector('button')!;  putting ! at the end tells the ts to ignore if this is null
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') { // type guard as we are running different code for different conditions
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
//Object Types and Array Types
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult);
    console.log(stringResults);
    console.log(result);
    console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});

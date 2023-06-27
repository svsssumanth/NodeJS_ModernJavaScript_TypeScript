"use strict";
const num1Element = document.getElementById('num1'); // this is typecasting
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
//const buttonElement = document.querySelector('button')!;  putting ! at the end tells the ts to ignore if this is null
const numResults = [];
const stringResults = [];
//generics type is a type that interacts with other type. array types above are a generic type
//array is lsit of data and it has list which is other type
const numResults1 = []; // generic type
// A promise is also a generic type
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
//value that promise resolves to is a generic type
myPromise.then((result) => {
    console.log(result.split('w'));
});
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

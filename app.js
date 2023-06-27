"use strict";
const num1Element = document.getElementById('num1'); // this is typecasting
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
//const buttonElement = document.querySelector('button')!;  putting ! at the end tells the ts to ignore if this is null
function add(num1, num2) {
    return num1 + num2;
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
});

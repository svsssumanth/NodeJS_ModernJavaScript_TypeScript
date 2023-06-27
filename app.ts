const num1Element = document.getElementById('num1') as HTMLInputElement;  // this is typecasting
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;
//const buttonElement = document.querySelector('button')!;  putting ! at the end tells the ts to ignore if this is null

function add(num1: number | string, num2: number | string) { // Union TYpes are declared using Pipe symbol
  if (typeof num1 === 'number' && typeof num2 === 'number') {  // type guard as we are running different code for different conditions
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
} 


buttonElement?.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  console.log(result);
  console.log(stringResult);
})
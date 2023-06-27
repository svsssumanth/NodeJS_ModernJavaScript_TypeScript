const num1Element = document.getElementById('num1') as HTMLInputElement;  // this is typecasting
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;
//const buttonElement = document.querySelector('button')!;  putting ! at the end tells the ts to ignore if this is null

function add(num1: number, num2: number) {
  return num1 + num2;
}


buttonElement?.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  console.log(result);
})
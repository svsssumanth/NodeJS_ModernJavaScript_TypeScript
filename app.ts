const num1Element = document.getElementById('num1') as HTMLInputElement;  // this is typecasting
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;
//const buttonElement = document.querySelector('button')!;  putting ! at the end tells the ts to ignore if this is null


const numResults: number[] = [];
const stringResults: string[] = [];

//generics type is a type that interacts with other type. array types above are a generic type

//array is lsit of data and it has list which is other type

const numResults1: Array<number> = []; // generic type


// A promise is also a generic type

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked!')
  }, 1000);
});

//value that promise resolves to is a generic type


myPromise.then((result) => {
  console.log(result.split('w'));
})



//TYpe Alias ---> useful when we are having union types

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };


//interfaces are alternate to type alias

interface ResultObj {
  val: number;
  timestamp: Date;
}



function add(num1: NumOrString, num2: NumOrString ) { // Union TYpes are declared using Pipe symbol
  if (typeof num1 === 'number' && typeof num2 === 'number') {  // type guard as we are running different code for different conditions
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
} 

//Object Types and Array Types

function printResult(resultObj: Result) { //after type definition colon we deine the object structure
  console.log(resultObj.val);
}

buttonElement?.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  stringResults.push(stringResult as string);
  console.log(stringResults);
  console.log(result);
  console.log(stringResult);
  printResult({val: result as number, timestamp: new Date()})
  console.log(numResults, stringResults);
})
const n = 5;
const numbers = Array.from({ length: n }, (_, index) => index + 1);
//for
console.log("for ");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//while
console.log("\nwhile ");
let j = 0;
while (j < numbers.length) {
  console.log(numbers[j]);
  j++;
}
//do-while
console.log("\ndo...while :");
let k = 0;
do {
  console.log(numbers[k]);
  k++;
} while (k < numbers.length);
//for-in
console.log("\n for...in");
for (const index in numbers) {
  console.log(numbers[index]);
}

//for-of
console.log("\nfor...of");
for (const value of numbers) {
  console.log(value);
}

//forEach
console.log("\nforEach");
numbers.forEach((value) => {
  console.log(value);
});

//map
console.log("\nmap");
numbers.map((value) => {
  console.log(value);
});
//удобнее использовать метод forEach
//---------------------------------------------------------------------------------------------------------------------------
const numbersArray = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
function printNumbersLessThanFive(arr) {
  console.log("Numbers less than 5:");
  for (const number of arr) {
    if (number < 5) {
      console.log(number);
    }
  }
}
printNumbersLessThanFive(numbersArray);
function findMinMaxPositions(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const maxPositions = arr.reduce((acc, val, index) => {
    if (val === max) {
      acc.push(index);
    }
    return acc;
  }, []);

  const minPositions = arr.reduce((acc, val, index) => {
    if (val === min) {
      acc.push(index);
    }
    return acc;
  }, []);

  console.log(`Positions of maximum value (${max}):`, maxPositions);
  console.log(`Positions of minimum value (${min}):`, minPositions);
}
findMinMaxPositions(numbersArray);
function sortArrayDescending(arr) {
  const sortedArray = arr.slice().sort((a, b) => b - a);
  console.log("Sorted array in descending order:", sortedArray);
}
sortArrayDescending(numbersArray);
function printElementsAboveAverage(arr) {
  const average = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  console.log(`Elements above average (${average}):`);
  for (const number of arr) {
    if (number > average) {
      console.log(number);
    }
  }
}
printElementsAboveAverage(numbersArray);
//---------------------------------------------------------------------------------------------------------------------------
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";
let firstElement = styles.shift();
console.log(firstElement);
styles.unshift("Рэп", "Регги");
console.log(styles.join(", "));
//---------------------------------------------------------------------------------------------------------------------------
// function sumInputNumbers() {
//   let numbers = [];
//   while (true) {
//       let userInput = prompt("Введите число:");
//       if (userInput === null || userInput === "" || isNaN(userInput)) {
//           break;
//       }
//       let number = parseFloat(userInput);
//       numbers.push(number);
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//   }
//   return sum;
// }
// let result = sumInputNumbers();
// console.log("Сумма введенных чисел: " + result);
//---------------------------------------------------------------------------------------------------------------------------
// function convert(fn, array) {
//   return array.map(fn);
// }
// function square(x) {
//   return x * x;
// }
// let inputArray = [1, 2, 3, 4];
// let resultArray = convert(square, inputArray);
// console.log(resultArray); 
// console.log(inputArray);
//---------------------------------------------------------------------------------------------------------------------------
// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// originalArray.splice(4, 3, 0, 0, 0);
// console.log(originalArray);
//---------------------------------------------------------------------------------------------------------------------------
function extract(start, end) {
  let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultArray = originalArray.slice(start - 1, end);

  return resultArray;
}
let result = extract(2, 4);
console.log(result);
//---------------------------------------------------------------------------------------------------------------------------
// const colors = ["red", "green", "blue"];
// function checkColor(color) {
//     let position = colors.indexOf(color);
//     return position;
// }
// let result1 = checkColor("green");
// console.log(result1);
// let result2 = checkColor("yellow");
// console.log(result2);
//---------------------------------------------------------------------------------------------------------------------------
// function filter(array) {
//   let filteredArray = array.filter(item => typeof item === 'number' && !isNaN(item));
//   return filteredArray;
// }
// const originalArray = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];
// let resultArray = filter(originalArray);
// console.log(resultArray);
//---------------------------------------------------------------------------------------------------------------------------
function uniqueSorted(array) {
  let uniqueSet = new Set(array);
  let sortedArray = Array.from(uniqueSet).sort((a, b) => a - b);
  return sortedArray;
}
const originalArray = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
let resultArray = uniqueSorted(originalArray);

console.log(resultArray);
//---------------------------------------------------------------------------------------------------------------------------
let colors = ["white", "blue", "yellow", "black", "red", "green"];
let [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(otherColors);

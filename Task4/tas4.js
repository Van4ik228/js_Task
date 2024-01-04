// function adunare(a, b) {
//     return a + b;
//   }
//   let total  = adunare(5, 2);
//   console.log(total);  
// //--------------------------------------------------------------------------  
//   function fahrenheitToCelsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
//   }
//   let temperaturaFahrenheit = 32;
//   let temperaturaCelsius = fahrenheitToCelsius(temperaturaFahrenheit);
//   console.log(temperaturaFahrenheit + " градусов " + temperaturaCelsius.toFixed(2) + " градусов цельсия.");
// //--------------------------------------------------------------------------  
// function number(num) {
//     return num % 2 === 0;
//   }
//   var num1= 10;
//   console.log("цифра " + num1 + " isPair? " + number(num1));
//--------------------------------------------------------------------------
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   let num = 2;
//   console.log("Факториал " + num + " равен: " + factorial(num));
//--------------------------------------------------------------------------
// function ArithmeticAverage(numbers) {
//     if (numbers.length === 0) {
//       return null; 
//     }
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     var average = sum / numbers.length;
//     return average;
//   }
//   var num4 = [1, 2, 3, 4, 5];
//   var middle = ArithmeticAverage(числа);
//   console.log("Среднее арифметическое чисел " + num4 + " равно: " + middle);
//--------------------------------------------------------------------------
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);
// console.log(reversedString);
//--------------------------------------------------------------------------
// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let result = randomNumber(10, 20);
// console.log(result);
//--------------------------------------------------------------------------
// function power(base, exponent) {
//   return Math.pow(base, exponent);
// }
// let result = power(2, 3);
// console.log(result);
//--------------------------------------------------------------------------
function countVowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
var result = countVowels("Hello, World!");
console.log(result);
//--------------------------------------------------------------------------
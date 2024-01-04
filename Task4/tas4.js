function adunare(a, b) {
    return a + b;
  }
  let total  = adunare(5, 2);
  console.log(total);  
//--------------------------------------------------------------------------  
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  let temperaturaFahrenheit = 32;
  let temperaturaCelsius = fahrenheitToCelsius(temperaturaFahrenheit);
  console.log(temperaturaFahrenheit + " градусов " + temperaturaCelsius.toFixed(2) + " градусов цельсия.");
//--------------------------------------------------------------------------  
function number(num) {
    return num % 2 === 0;
  }
  var num1= 10;
  console.log("цифра " + num1 + " isPair? " + number(num1));
//--------------------------------------------------------------------------
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  let num = 5;
  console.log("Факториал " + num + " равен: " + factorial(num));
//--------------------------------------------------------------------------
function ArithmeticAverage(numbers) {
    if (numbers.length === 0) {
      return null; 
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return average;
  }
  var num4 = [1, 2, 3, 4, 5];
  var middle = ArithmeticAverage(числа);
  console.log("Среднее арифметическое чисел " + num4 + " равно: " + middle);
//--------------------------------------------------------------------------
function verseString(inputString) {
  return inputString.split('').reverse().join('');
}

function randomnumber(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
function power(base, exponent) {
  return Math.pow(base, exponent);
}
function countVowels(inputString) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of inputString) {
      if (vowels.includes(char)) {
          count++;
      }
  }
  return count;
}
function concatenateStrings(str1, str2) {
  return str1 + str2;
}
console.log(verseString("Hello"));  
console.log(randomnumber(1, 10)); 
console.log(power(2, 3));  
console.log(countVowels("Programming")); 
console.log(concatenateStrings("Hello", "World"));  

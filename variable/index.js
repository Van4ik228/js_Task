// Получаем три числа от пользователя
var a = parseFloat(prompt("Введите значение для a:"));
var b = parseFloat(prompt("Введите значение для b:"));
var c = parseFloat(prompt("Введите значение для c:"));

// Находим максимальное и минимальное число
var maxNumber = Math.max(a, b, c);
var minNumber = Math.min(a, b, c);

// Выводим результаты
console.log("Наибольшее число: " + maxNumber);
console.log("Наименьшее число: " + minNumber);


const a = 10;
const b = 5;
const c = 8;

if (a >= b && a >= c) {
  console.log(`Наибольшее число: ${a}`);
} else if (b >= a && b >= c) {
  console.log(`Наибольшее число: ${b}`);
} else {
  console.log(`Наибольшее число: ${c}`);
}

if (a <= b && a <= c) {
  console.log(`Наименьшее число: ${a}`);
} else if (b <= a && b <= c) {
  console.log(`Наименьшее число: ${b}`);
} else {
  console.log(`Наименьшее число: ${c}`);
}





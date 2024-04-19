// Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function userInfo(name, lastName, age) {
//   console.log(`Привет, ${name} ${lastName}. Вы уже большой, вам ${age}`);
// }

// console.log(userInfo("Иван", "Петров", 25));

// Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// function makeSquare(number) {
//   return number ** 2;
// }

// console.log(makeSquare(4));

// Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function numberPositive(number) {
//   if (typeof number !== "number") {
//     return;
//   } else if (number > 0) {
//     console.log("+++");
//   } else if (number < 0) {
//     console.log("---");
//   }
// }

// numberPositive("ff");

// Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// const sumNumbers = (a, b, c) =>
//   console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
// const a = Math.trunc(Math.random() * 10);
// const b = Math.trunc(Math.random() * 10);
// const c = Math.trunc(Math.random() * 10);

// sumNumbers(a, b, c);

// Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// const root = (x) => Math.sqrt(x);
// console.log(root(3));
// console.log(root(4));
// console.log(root(3) + root(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// const findMin = (x, y) => Math.min(x, y);
// console.log(findMin(2, 54));

// ---------------------------------------

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// function weekDay(num) {
//   switch (num) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Неверное число";
//   }
// }

// console.log(weekDay(4));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

const date = new Date();
const hour = date.getHours();

function sayMyTime(hour) {
  if (hour >= 6 && hour < 12) greeting = "Доброе утро";
  else if (hour >= 12 && hour < 18) greeting = "Добрый день";
  else if (hour >= 18 && hour < 24) greeting = "Добрый вечер";
  else if (hour >= 0 && hour < 6) greeting = "Доброй ночи";
  return greeting;
}

console.log(date);
console.log(hour);
console.log(sayMyTime(hour));

/**
 *  Функция возвращает приветствие
 * @param {string} name - имя пользователя
 * @param {number} age - возраст пользователя
 * @returns {string} - строка с приветствием
 */

function sayHello(name, age) {
  return `Привет, ${name}, вам ${age}`;
}

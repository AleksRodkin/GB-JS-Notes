// 1. Установить расширение форматирования кода
// 2. Установить расширение “JavaScript Snippet Pack”
// 3. Сделайте файл с вашей первой программой.
// a. index.html
// b. script.js
// 4. Подключите файл script.js к index.html
// 5. В файле index.html создайте скрипт который выводит в
// консоль текст “Текст из index.html”
// 6. В файле script.js вывести в консоль текст “Текст из
// script.js!”

// console.log("Текст из script.js");

// 1. Создайте переменную num и присвойте ей значение 123. Выведите
// значение этой переменной в консоль
// 2. Создайте переменную а и присвойте ей значение 5, переопределите
// переменную а на значение 7, выведите переменную а в консоль
// 3. Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С
// помощью функции console.log выведите в консоль содержимое
// переменной b.
// 4. Создайте 2 вида комментариев в вашем коде, добавьте в них
// произвольный текст

// const num = 123;
// console.log(num);

// let a = 5;
// a = 7;
// console.log(a);

// let b = 1 + 2 + 3;
// console.log(b);

// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
// 2. Выведите в консоль все созданные переменные.
// const myAge = +prompt("Введите возраст: ");
// const year = 2024;
// const sum = myAge + year;
// console.log(`Сумма равна ${sum}`);
// console.log(myAge, year);

// const diff = year - myAge;
// console.log(`Разность равна ${diff}`);

// const mult = myAge * year;
// console.log(`Произведение равно ${mult}`);

// const div = year / myAge;
// console.log(`Частное равно ${div}`);

// const str = "123.2";
// console.log(str);
// console.log(+str);
// console.log(Number(str));
// console.log(Number.parseInt(str));
// console.log(Number.parseFloat(str));

// 3. Сложите все созданные переменные и выведите результат в консоль.
// console.log(sum + diff + mult + div);

// 1. Запишите в переменную a число 0.1, а в переменную b - число 0.2.
// Найдите сумму значений этих переменных и выведите ее на экран.

// const a = 0.1;
// const b = 0.2;
// const sum = a + b; // 0.3000000000000004
// console.log(+sum.toFixed(1)); // Сколько чисел после запятой - 1 = 0.3

// let num = 10.2525;
// console.log(Math.round(num)); // округляет до целого числа 10 по правилам
// console.log(Math.floor(num)); // всегда округляет вниз
// console.log(Math.ceil(num)); // всегда округляет вверх
// console.log(Math.trunc(num)); // просто выкидывает дробную часть

// console.log(Math.round(num * 10) / 10); // небольшая хитрость - умножаем, округляем и потом делим

// 2. Создайте переменную c, запишите в нее какое-нибудь
// положительное или отрицательное число. Выведите на экран это
// число с обратным знаком.

// let c = -123;
// console.log(c);
// console.log(-c);

// 1. Создайте строку с вашем именем и строку с вашей фамилией.
// Выведите эти данные в консоль
// 2. Создайте переменную с текстом 'java' и переменную с текстом
// 'script'. С помощью этих переменных и операции сложения строк
// выведите в консоль строку 'javascript'.
// 3. Создайте переменную с текстом 'hello' и переменную с текстом
// 'world'. С помощью этих переменных и операции сложения строк
// выведите в консоль строку 'hello world'.

const myName = "Aleks";
const myLastName = "Rodkin";
console.log(`Имя и фамилия ${myName} ${myLastName}`);

const java = "Java";
const script = "script";
console.log(`Итого мы изучаем ${java + script}`);

const hello = "hello";
const world = "world";
console.log(`Ну допустим ${hello} ${world}`);

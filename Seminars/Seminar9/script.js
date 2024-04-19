// Задание 1 (тайминг 20 минут) 
// 1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями” 
// 2. Добавить кнопку отправить 
// 3. При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox 
// 4. Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const divEl = document.querySelector('div.form');
// const checkEl = divEl.querySelector('input.check');
// const btnEl = divEl.querySelector('button.btn');

// btnEl.addEventListener('click', function (e) {
//   if (!checkEl.checked) {
//     const spanEl = document.createElement('span');
//     spanEl.innerHTML = "Необходимо согласиться с условиями";
//     divEl.appendChild(spanEl);
//   }
// });

// Задание 2 (тайминг 25 минут) 
// 1. В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно 
// 2. Кнопка отправить 
// 3. Если выбран чай, необходимо вывести сообщение “Чай закончился” 
// 4. Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const divEl = document.querySelector('div.container');
// const checkTeaEl = divEl.querySelector('input.tea');
// const checkCofEl = divEl.querySelector('input.coffee');
// const btnEl = divEl.querySelector('button.btn');

// btnEl.addEventListener('click', function (e) {
//   if (checkTeaEl.checked) {
//     console.log('Чай закончился');
//   }
//   if (checkCofEl.checked) {
//     console.log('Кофе закончился');
//   }
// });

// Задание 3 (тайминг 20 минут) 
// 1. Создать поле ввода (пароль) 
// 2. Кнопка отправить 
// 3. Если пользователь вводит текст “пароль” то поле ввода 
// должно быть подсвечено зеленым цветом 
// 4. Если пароль неверный, у поля ввода появляется красная 
// обводка и текст “пароль неверный”

// const password = "123";
// const divEl = document.querySelector('div.container');
// const inputEl = divEl.querySelector('input.password');
// const btnEl = divEl.querySelector('button.btn');

// btnEl.addEventListener('click', function (e) {
//   if (inputEl.value === password) {
//     inputEl.classList.remove('border-red');
//     inputEl.classList.add('border-green');
//   } 
//   if (inputEl.value !== password) {
//     inputEl.classList.remove('border-green');
//     inputEl.classList.add('border-red');
//   } 
// });

// Задание 4 (тайминг 20 минут) 
// 1. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок” 
// 2. При вводе текста в поле ввода необходимо чтобы текст внутри 
// заголовка менятся на введенный в поле ввода

const divEl = document.querySelector('div.container');
const inputEl = divEl.querySelector('input.input');
const h1El = divEl.querySelector('h1.title');
const h2El = divEl.querySelector('h2.subtitle');

inputEl.addEventListener('input', function (e) {
  h1El.innerHTML = e.target.value;
});
inputEl.addEventListener('change', function (e) {
  h2El.innerHTML = e.target.value;
});
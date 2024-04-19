// Задание 1 (тайминг 15 минут)
// 1. В html создать кнопку button
/* <button class="btn">Кнопка</button> */
// 2. После загрузки страницы вывести в консоль текст “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль текст “событие onclick”

// const btnEl = document.querySelector('button.btn');

// window.addEventListener('load', function (e) {
//   console.log("Страница загрузилась");
// });

// btnEl.addEventListener('click', function (e) {
//   console.log('событие onclick');
// });

// 1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 2. Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// 4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const buttonContainer = document.querySelector('div.container');
// const buttonEl1 = document.createElement('button');
// const buttonEl2 = document.createElement('button');
// const buttonEl3 = document.createElement('button');
// const buttonEl4 = document.createElement('button');
// const buttonEl5 = document.createElement('button');
// buttonEl1.innerHTML = 'кнопка1';
// buttonEl2.innerHTML = 'кнопка2';
// buttonEl3.innerHTML = 'кнопка3';
// buttonEl4.innerHTML = 'кнопка4';
// buttonEl5.innerHTML = 'кнопка5';

// buttonContainer.appendChild(buttonEl1);
// buttonContainer.appendChild(buttonEl2);
// buttonContainer.appendChild(buttonEl3);
// buttonContainer.appendChild(buttonEl4);
// buttonContainer.appendChild(buttonEl5);

// const clickFunc = function (e) {
//   console.log(e.target.innerHTML);
// }

// buttonContainer.addEventListener('click', clickFunc);

// let count = 0;

// buttonEl4.addEventListener('click', function (e) {
//   count++;
//   console.log(count);
// });

// buttonEl5.addEventListener('click', function (e) {
//   e.target.innerHTML = "Вы нажали эту кнопку";
// });

// Задание 3 (тайминг 30 минут)
// 1. Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
// 3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const buttonContainer = document.querySelector("div.container");
// const buttonEl1 = document.createElement("button");
// buttonEl1.innerHTML = 'кнопка1';
// buttonContainer.appendChild(buttonEl1);

// buttonEl1.addEventListener('click', function (e) {
//   const h1El = document.createElement('h1');
//   h1El.innerHTML = 'Заголовок';
//   buttonContainer.appendChild(h1El);
// });

// const buttonEl2 = document.createElement("button");
// buttonEl2.innerHTML = 'кнопка2';
// buttonContainer.appendChild(buttonEl2);

// buttonEl2.addEventListener('click', function (e) {
//   const h1Array = buttonContainer.querySelectorAll('h1');
//   // h1Array[0].remove(); // по одному

//   h1Array.forEach(function (el) {
//     el.remove();
//   });
// });

// const buttonEl3 = document.createElement("button");
// buttonEl3.innerHTML = 'кнопка3';
// buttonContainer.appendChild(buttonEl3);

// buttonEl3.addEventListener('mouseover', function (e) {
//   console.log('Вы навели на данную кнопку');
// });
// buttonEl3.addEventListener('mouseout', function (e) {
//   console.log('Наведения на кнопку больше нет');
// });

// Задание 4 (тайминг 30 минут)
// 1. Создать в html список состоящий из 3-х произвольных элементов li
// 2. Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// 3. Создать кнопку, которая будет удалять первый элемент из созданного списка
// 4. Создать кнопку, при клике на которую ей добавляется класс “click”

const buttonContainer = document.querySelector("div.container");
const ulEl = buttonContainer.querySelector("ul");

const buttonEl1 = document.createElement("button");
buttonEl1.innerHTML = "Создать ещё один элемент";
buttonContainer.appendChild(buttonEl1);

buttonEl1.addEventListener("click", function (e) {
  const liEl = document.createElement("li");
  liEl.innerHTML = "новый элемент списка " + Math.random();
  ulEl.appendChild(liEl);
});

const buttonEl2 = document.createElement("button");
buttonEl2.innerHTML = "Удоли первый элемент";
buttonContainer.appendChild(buttonEl2);

buttonEl2.addEventListener("click", function (e) {
  const liArray = ulEl.querySelectorAll("li");
  if (liArray.length > 0) {
    liArray[0].remove();
  } else {
    console.log("Нечего удалять перестань");
  }
});

const buttonEl3 = document.createElement("button");
buttonEl3.innerHTML = "Назначить класс";
buttonContainer.appendChild(buttonEl3);

buttonEl3.addEventListener('click', function (e) {
  e.target.setAttribute('class', 'click')
});





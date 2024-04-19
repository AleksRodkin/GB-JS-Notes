// Задание 2 (тайминг 15 минут)
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Задание 3 (тайминг 30 минут)
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// Задание 4 (тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения (из данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости

// const divContEl = document.querySelector("div.container");

// const parseResult = JSON.parse(dataInfo);
// parseResult.forEach((element) => {
//   const newDivEl = document.createElement("div");
//   newDivEl.classList.add(element["class"]);

//   const imgEl = document.createElement("img");
//   imgEl.setAttribute("src", element.url);
//   imgEl.setAttribute("width", element.width);
//   imgEl.setAttribute("height", element.height);

//   const textImgEl = document.createElement("p");
//   textImgEl.innerHTML = element.text;

//   divContEl.appendChild(newDivEl);
//   newDivEl.appendChild(imgEl);
//   newDivEl.appendChild(textImgEl);
// });

const divContEl = document.querySelector("div.container");

fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
  .then((response) => response.json())
  .then((parseResult) => {
    parseResult.forEach((element) => {
      const newDivEl = document.createElement("div");
      newDivEl.classList.add('img__container');

      const textData = document.createElement("p");
      textData.innerHTML = element.Date;
      newDivEl.appendChild(textData);

      const textCur = document.createElement("p");
      textCur.innerHTML = element.Cur_Abbreviation;
      newDivEl.appendChild(textCur);

      const textScale = document.createElement("p");
      textScale.innerHTML = element.Cur_Scale;
      newDivEl.appendChild(textScale);

      const textCurName = document.createElement("p");
      textCurName.innerHTML = element.Cur_Name;
      newDivEl.appendChild(textCurName);

      const textOffRate = document.createElement("p");
      textOffRate.innerHTML = element.Cur_OfficialRate;
      newDivEl.appendChild(textOffRate);

      divContEl.appendChild(newDivEl);
    });
  });

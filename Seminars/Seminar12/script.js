// Задание 1 (тайминг 125 минут)
// 1. Создание медиа плеера
// 2. Создать файл index.html
// 3. Создать папку img в которую загрузить изображение кнопок play, pause
// 4. Скачать произвольное видео из интернета
// 5. Добавить Тег видео в html
// 6. Продумать внешний вид progress и volume
// 7. Продумать время проигрывателя
// 8. Реализовать функционал своего собственного видео- плеера

// мини тайминги
// 1. Скачать все картинки (найти макет по желанию)
// 2. Добавляете html добавляете все элементы для управления видео
// 3. Реализуем кнопки play, pause
// 4. время и ползунки
// 5. Собираем внешний вид

const videoEl = document.createElement("video");
videoEl.setAttribute("src", "media/rabbit320.mp4");

const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(videoEl);

const playEl = document.createElement("div");
const pauseEl = document.createElement("div");
playEl.classList.add("play");
pauseEl.classList.add("pause");

playEl.addEventListener("click", function (e) {
  videoEl.play();
  console.log(videoEl.currentTime);
});
pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
  console.log(videoEl.currentTime);
});

const rangeEl = document.createElement("input");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("value", "0");

rangeEl.addEventListener("input", function (e) {
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((videoEl.currentTime / videoEl.duration) * 100)
  );
});

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

videoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", videoEl.volume * 100);
});

volumeEl.addEventListener("input", function (e) {
  videoEl.volume = e.target.value / 100;
});

containerEl.appendChild(rangeEl);
containerEl.appendChild(playEl);
containerEl.appendChild(pauseEl);
containerEl.appendChild(volumeEl);


const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  console.log(e.target);
});
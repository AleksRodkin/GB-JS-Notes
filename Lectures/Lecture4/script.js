// const user = [];

// const userName = prompt('Ваше имя: ');
// const userAge = +prompt('Ваш возраст: ');

// user.push(userName);
// user.push(userAge);

// console.log(user);

// ИЛИ ТАК

// user.push(prompt('Ваше имя: '))
// user.push(+prompt('Ваш возраст: '))

// console.log(user);

// const word = "example";
// const arrWord = word.split("");
// const upWord = arrWord.pop();
// arrWord.push(upWord.toLocaleUpperCase());
// console.log(arrWord.join(""));

const arrAnswers = ["елка", "ёлка", "ель"];
const userAnswer = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
  const element = arrAnswers[i];
  if (element === userAnswer) {
    console.log('Молодец');
  } else {
    continue;
  }
}
// function helloName(name) {
//   console.log(name);
// }

// helloName("Alex");

// -------------------------

// let count = 5;
// function counter() {
//   return count++;
// }

// counter();

// console.log(count);

// -------------------------

// let age = Number(prompt("Сколько вам лет?"));

// function upAge() {
//   return (age = age + 5);
// }

// upAge();

// console.log(`Через 5 лет вам будет ${age}`);

// -------------------------

// let age = Number(prompt("Сколько вам лет?"));

// const lvlUpAge = () => {
//   return age + 5;
// };

// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// -------------------------

// let age = Number(prompt("Сколько вам лет?"));

// const lvlUpAge = () => age + 5;

// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// -------------------------

// const salary = (money) => {
//   money = money * 0.87;
//   return money * 0.75;
// };

// const userMoney = Number(prompt("Сколько ты зарабаываешь?"));

// console.log(salary(userMoney));

// -------------------------

// function sayHello() {
//   alert("Привет");
//   alert("Вы нажали на кнопку");
// }

// -------------------------

function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() == answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}

function puzzle() {
  askQuestion(
    "лук",
    "Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает"
  );
  askQuestion("елка", "Зимой и летом одним цветом");
}

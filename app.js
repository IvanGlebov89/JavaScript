const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
console.log("Смогу ли я работать " + (availableHours > projectHours));
console.log("стоймость работы: " + payRateUSD * projectHours);

// преобозование типов

const age = "18";
console.log(Number(age) + 5);
const string = 21;
console.log(String(string) + 3);
// if else

const money = 100;
const product = 40;
if (money >= product) {
  console.log("товар куплен");
  console.log(`${money - product} у вас осталось токенов`);
} else {
  console.log(
    `не достаточно средств ! вам не хватило токенов ${product - money}`
  );
}
// задачка

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;
const result = deposit * (1 + rate / 12) ** 24;

if (result > houseCost) {
  console.log(
    `мы накопили ${result} можем купить дом. остаток средств ${
      result - houseCost
    }`
  );
} else {
  console.log("купить не сможем");
}

// const q = prompt("Введите число");
// if (Number(q) === 7) {
//   alert("вы угадали ");
// } else {
//   alert("вы не угадали");
// }
const role = "manager";

if (role === "manager") {
  console.log("Менеджер");
} else if (role === "admin") {
  console.log("Админ");
} else if (role === "ceo") {
  console.log("Сео");
} else {
  console.log("мы тебя не знаем");
}

switch (role) {
  case "manager":
    console.log("Менеджер");
    break;
  case "admin":
    console.log("Админ");
    break;
  case "ceo":
    console.log("Сео");
    break;
}

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

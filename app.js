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
const product = 150;
if (money >= product) {
  console.log("товар куплен");
} else {
  console.log("у вас не достаточно средств");
}

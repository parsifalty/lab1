console.log("Привет, мир!");

console.log(2 + 3);

alert("Привет, мир!");
console.log("Hello, console!");

let name = "Pasha";
let birthYear = 2005;
let isStudent = true;

let score = prompt("Введите ваш балл:");
if (score >= 90) {
  console.log("Отлично!");
} else if (score >= 70) {
  console.log("Хорошо");
} else {
  console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
  console.log(`Итерация: ${i}`);
}

// Чем отличается var от let и const?

// let можно изменить так же как и var const менять нельзя задается навсегда.

// Как работает оператор == в сравнении с ===?

// Что такое неявное преобразование типов в JavaScript?
// К примеру 5 + "3" или 2 == null;

// == сравнивает значения === сравнивает тип данных.

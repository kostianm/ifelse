/*1. Попросити користувача ввести послідовно два числа через prompt (дві операції).
(Перетворення на Number зробити явним - це ще по одному кроку на кожне число)

Якщо сумма цих двох чисел ділиться на 5 - вивести alert, що сума кратна 5
Інакше - вивести, що сума не кратна 5
(одна перевірка на if, і гілка else, якщо ні)

Після виконання дослідити в дебагері крок за кроком виконання вашого коду*/

let num1 = prompt('Please enter first number:');
let num2 = prompt("Please enter second number:");

num1 = Number(num1);
num2 = Number(num2);
sum = num1 + num2

if (sum%5===0) {
    alert(`Sum numbers ${num1} and ${num2} is a multiple 5`)
} else {
    alert(`Sum numbers ${num1} and ${num2} is not a multiple 5`);
}


/*2. Написати функцію, яка приймає сторону квадрата та повертає його площу*/
// let areaSquare = function (a) {
//      return `Area of square with side ${a} is ${a**2}`
// }
// console.log(areaSquare(5))

/*3. Написати функцію, яка виводить промптом "меню" у вигляді
     "1 - Чай
      2 - Кава
     3 - Сік
     4 - Вода"
(перенос рядка у модалці можна зробити за допомогою "\n")
і очікує від користувача цифру, що відповідає напою. При виборі чогось доступного - вивести алерт на кшталт
"Ви обрали сік" або "Ви обрали воду" (залежно від того, що там користувач обрав). Якщо введено щось не те - вивести "Такого напою у нас нема"

Задачу вирішити через оператор switch-case */

// function menu() {
//      let choice = prompt("оберіть напій: \n 1 - Чай \n 2 - Кава \n 3 - Сік \n 4 - Вода:");
//      switch (choice) {
//        case "1":
//          alert("Ви обрали Чай");
//          break;
//        case "2":
//          alert("Ви обрали Кава");
//          break;
//        case "3":
//          alert("Ви обрали Сік");
//          break;
//        case "4":
//          alert("Ви обрали Вода");
//          break;
//           default:
//           alert("Такого напою у нас нема");
//          break;
//      }
// }
// menu()

/*4. Користувач вводить суму покупки.
Обчислити та вивести остаточну суму покупки з урахуванням знижки.
Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Використати тернарний оператор */

// let amount = prompt('Please enter amount purchase:')
// let discount = amount > 800 ? amount * 0.95 : (amount>500 ? amount * 0.97 : amount)
// console.log(`Your puchase amount with discount is ${discount}`)

/* 5. Реалізувати функцію, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку). Функція має повертати булеве значення: true, якщо ділиться без залишку, false - не ділиться без залишку. */

// function checkoutNumber (a, b) {
//      a = Number(prompt('Please enter first number'));
//      b = Number(prompt("Please enter second number"));
//      return a % b === 0
// }
// console.log(checkoutNumber());

/* Задачка з * для допитливих: написати функцію, яка приймає три коефіцієнта в якості аргумента та знаходить корені квадратного рівняння
(PS. Поки що ми повертати з функції одразу два значення не вмієм, тому хай функція їх просто виведе на консоль або алертом)
(гугл - "формула дискримінанта квадратного рівняння")
 */

// function abs(a, b, c) {
//      let result;
//      let d = b * b - 4 * a * c;
//      console.log(d);
//      if (d > 0) {
//           const sqrtDelta = Math.sqrt(d);
//           const x1 = (-b + sqrtDelta) / (2 * a);
//           const x2 = (-b - sqrtDelta) / (2 * a);
//           return { x1, x2 };
//      }else if (d === 0) {
//           return  -b/(2*a);
//      } else {
//         return   "дійсних коренів немає";
//      }
     
// }

// console.log(abs(1, -3, 2));
// console.log(abs(1, -2, 1));
// console.log(abs(1, 2, 5));
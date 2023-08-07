// Проект
// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать это число. Если догадка пользователя больше случайного числа, 
// то программа должна вывести сообщение 
// 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то программа должна вывести сообщение 
// 'Слишком мало, попробуйте еще раз'. Если пользователь угадывает число, то программа должна поздравить его и вывести сообщение 
// 'Вы угадали, поздравляем!'.
// Составляющие проекта: Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; 
// Бесконечный цикл; Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

function doRandomNumber() {
    const num = Math.floor(Math.random() * 100) + 1;
    let a = +prompt("Программа загадала рандомное число. Ваша зададача угадать его. Введите число от 0 до 100");

    while (true) {
        if (isNaN(a)) {
            alert("Пожалуйста, введите число.");
            a = +prompt("Введите число от 0 до 100");
            continue;
        }
        if (a > num) {
            a = +prompt(`Вы ввели число ${a}, и это слишком большое значение. Введите число от 0 до ${a}:`);
        } else if (a < num) {
            a = +prompt(`Вы ввели число ${a}, и это слишком маленькое значение. Введите число от ${a} до 100:`);
        } else {
            alert("Вы угадали! Поздравляем!");
            break;
        }
    }
}

doRandomNumber();


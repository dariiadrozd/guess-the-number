// На входе строка в виде пароля. 
// Необходимо написать функцию на проверку, что пароль является надежным 
// (содержит хотя бы 1 букву в большом регистре, числа, буквы, символ, длина не менее 8 символов)

const str = "Darya_2004";

function doPassword(str) {
    if (str.length < 8) return "недостаточно символов";
    let countNum = 0;
    let countToUpperCase = 0;
    let countToLowerCase = 0;
    for (let i = 0; i <= str.length; i++) {
        if (!isNaN(str[i])) {
            countNum++
        } else {
            str[i].toUpperCase() === str[i] ? countToUpperCase++ : countToLowerCase++;
        }
    }
    if (str.includes('@') || str.includes('-') || str.includes('$') || str.includes('*')) {
        countSymbol++;
    }
    if (countNum === 0 || countToUpperCase === 0 || countToLowerCase == 0 || countSymbol === 0) {
        return 'ненадежный пароль'
    } else {
        return 'надежный пароль'
    };
}
let result = doPassword(str)
console.log(result);

// Проект
// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать это число. Если догадка пользователя больше случайного числа, 
// то программа должна вывести сообщение 
// 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то программа должна вывести сообщение 
// 'Слишком мало, попробуйте еще раз'. Если пользователь угадывает число, то программа должна поздравить его и вывести сообщение 
// 'Вы угадали, поздравляем!'.
// Составляющие проекта: Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; 
// Бесконечный цикл; Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

  

'use strict';

/*Напишите JavaScript функцию, которая принимает строку в качестве параметра
 и преобразует первую букву каждого слова строки в верхний регистр.
 Пример строки: ‘тестовая строка коротка’
 Ожидаемый результат: ‘Тестовая Строка Коротка’*/

document.write(toUpperCase('тестовая строка коротка'));

function toUpperCase(str) {
    // разбиваем строку в массив, где каждое слово строки - это элемент массива
    var array = str.split(' ');
    var arr_result = [];

    // преобразовываем первую букву каждого элемента массива в верхний регистр
    array.forEach(function (item) {
        arr_result.push(item[0].toUpperCase() + item.slice(1));
    });

    return arr_result.join(' ');
}

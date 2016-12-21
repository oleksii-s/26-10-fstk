/**
 * Created by Oleksii on 21.12.2016.
 */

var text = "моя строка";
var str = "012345";

// Специальные символы
// \b	Backspace
// \f	Form feed
// \n	New line
// \r	Carriage return
// \t	Tab
// \uNNNN	Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например,
// `\u00A9` -- юникодное представление символа копирайт ©



// Экранирование специальных символов
var str = 'I\'m a JavaScript programmer';
var str1 = ' символ \\ ';

alert( str1 ); // символ \

// Доступ к символам
var str = "jQuery";
alert( str.charAt(0) ); // "j"
alert( str[0] ); // "j"
// Но
alert( "".charAt(0) ); // пустая строка
alert( "" [0] ); // undefined

// Поиск подстроки
var str = "Widget with id";

alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр


// Взятие подстроки: substr, substring, slice.

// substring(start [, end]);
// Метод substring(start, end) возвращает подстроку с позиции start до, но не включая end.

var str = "stringify";
alert(str.substring(0,1)); // "s", символы с позиции 0 по 1 не включая 1.

// Если аргумент end отсутствует, то идет до конца строки:
var str = "stringify";
alert(str.substring(2)); // ringify, символы с позиции 2 до конца

// substr(start [, length])
// Первый аргумент имеет такой же смысл, как и в substring, а второй содержит не конечную позицию, а количество символов.
var str = "stringify";
str = str.substr(2,4); // ring, со 2-й позиции 4 символа
alert(str);
// Если второго аргумента нет – подразумевается «до конца строки».

// slice(start [, end])
// Возвращает часть строки от позиции start до, но не включая, позиции end. Смысл параметров – такой же как в substring.

// Различие между substring и slice – в том, как они работают с отрицательными и выходящими за границу строки аргументами
alert( "testme".substring(-2) ); // "testme", -2 становится 0
alert( "testme".substring(4, -1) ); // "test"

alert( "testme".slice(-2) ); // "me", от 2 позиции с конца
alert( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.


// Правильное сравнение
var str = "Ёлки";
alert( str.localeCompare("Яблони") ); // -1
// Метод str1.localeCompare(str2) возвращает -1, если str1 < str2, 1, если str1 > str2 и 0, если они равны.




















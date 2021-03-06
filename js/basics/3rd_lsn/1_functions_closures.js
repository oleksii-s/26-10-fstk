/**
 * Глобальный объект (global object).
 *
 * В этом разделе рассмотрим переменные и функции в глобальной области.
 */

// Глобальными называют переменные и функции, которые не находятся внутри какой-то функции.

// В JavaScript все глобальные переменные и функции являются свойствами специального объекта,
// который называется global object (В браузере этот объект явно доступен под именем window.).
var a = 5; // объявление var создаёт свойство window.a
alert( window.a ); // 5
window.a = 5;
alert( a ); // 5

// Фазы выполнения скрипта.
// 1. Инициализация, подготовка к запуску.
//    Скрипт сканируется на предмет объявления функций (function declaration) и переменных (var)
// 2. Выполнение скрипта.
//    Присваивание (=) значений переменных происходит, когда поток выполнения доходит до соответствующей строчки кода.

// Пример:
var a = 5;
function f(arg) { /*...*/ }
var g = function(arg) { /*...*/ };

// На момент инициализации, до выполнения кода:
// window = { f: function, a: undefined, g: undefined }

// На момент выполнения:
var a = 5;
// window = { f: function, a: 5, g: undefined }

function f(arg) { /*...*/ }
// window = { f: function, a: 5, g: undefined } без изменений, f обработана ранее

var g = function(arg) { /*...*/ };
// window = { f: function, a: 5, g: function }


// !!! Конструкции for, if... не влияют на видимость переменных
for (var i = 0; i < 5; i++) { }

// Идентичный по функциональности код:
var i;
for (i = 0; i < 5; i++) { }

// !!! Не важно, где и сколько раз объявлена переменная (Все var будут обработаны один раз, на фазе инициализации)
var i = 10;

for (var i = 0; i < 20; i++) {
//...
}

var i = 5;





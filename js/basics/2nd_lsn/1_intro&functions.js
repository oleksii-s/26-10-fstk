'use strict';

// QUIZ
console.log( 'Вася' > 'Ваня' );
console.log( 'Вася' > 'Ваcяня' );


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

'a'.charCodeAt(0); //1072
console.log('а'==1072);






// FUNCTIONS

/*
Функции являются основными «строительными блоками» программы
Цель создания функций: избавление от дублирования кода,
т.е. Предотвращение повторения одиного и того же кода (одни и те же действия) во многих местах.

alert(), prompt() - примеры встроенных функций.
*/

// объявление функции:
function showMessage() {
  alert( 'Hi there' );
}
// вызов функции по ее имени.
showMessage();

/*
Локальные переменные ф-ции:

Функция может содержать локальные переменные, объявленные через var.
Такие переменные видны только внутри функции.

Неважно, где именно в функции и сколько раз объявляется переменная.
Любое объявление срабатывает один раз и распространяется на всю функцию.

NOTICE: Блоки if/else, switch, for, while, do..while не влияют на область видимости переменных.
*/

function showMessage() {
  var message = 'Привет!'; // локальная переменная

  alert( message );
}

showMessage(); // 'Привет!'

alert( message ); // Uncaught ReferenceError: message is not defined (undefined)



/*
Внешние переменные:

 Переменные, объявленные на уровне всего скрипта, называют «глобальными переменными».

 Если внутри функции объявлена своя локальная переменная с именем внешней,
 то все обращения к этой переменной, внутри ф-ции переиспользовали бы её (локальную),
 и внешняя переменная, при записи, останется неизменной.
*/
var userName = 'Петя';

function showMessage() {
  // доступ к внешней переменной на чтение.
  var message = 'Привет, я ' + userName;
  alert(message);

  userName = 'Вася';
}

showMessage(); // Привет, я Петя
alert(userName); // Вася


/*
Параметры ф-ции:

 Параметры копируются в локальные переменные функции.
*/

function showMessage(from, text) {
  from = '**' + from + '**'; // меняем локальную переменную from
  alert( from + ': ' + text );
}

var from = "Маша";

showMessage(from, "Привет");

alert( from ); // старое значение from без изменений, в функции была изменена копия

/*
Аргументы по умолчанию:

 При объявлении функции необязательные аргументы, как правило,
 располагают в конце списка.
*/

function showMessage(from, text) {
  // if (text === undefined) {
  //   text = 'текст не передан';
  // }
  text = text || 'текст не передан';

  alert( from + ": " + text );
}

showMessage("Маша", "Привет!"); // Маша: Привет!
showMessage("Маша"); // Маша: текст не передан


/*
Возврат значения:

  Функция может возвратить результат, который будет передан в вызвавший её код.
  Для возврата значения используется директива return.

  return может находиться в любом месте функции. Как только до него доходит
  управление – функция завершается и значение передается обратно.

  return может также использоваться без значения, чтобы прекратить выполнение
  и выйти из функции.

NOTICE: В случае, когда функция не вернула значение или return был без аргументов,
        считается что она вернула undefined
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

var age = prompt('Ваш возраст?');

if (checkAge(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}


/*
Одна функция – одно действие:

  Функция должна делать только то, что явно подразумевается её названием.
  И это должно быть одно действие.

  Если оно сложное и подразумевает поддействия – может быть имеет смысл выделить их
  в отдельные функции? Зачастую это имеет смысл, чтобы лучше структурировать код.

  В функции не должно быть ничего, кроме самого действия и поддействий,
  неразрывно связанных с ним.
*/





/*
Сверхкороткие имена функций:

  Имена функций, которые используются очень часто, иногда делают сверхкороткими.

  Например, во фреймворке jQuery есть функция $, во фреймворке Prototype – функция $$,
  а в библиотеке LoDash очень активно используется функция с названием из одного
  символа подчеркивания _.
*/




/*
Функциональные выражения (Function Declaration & Function Expression):
*/

// Функция является значением, таким же как строка или число (объявленную ф-цию можно вывести).
function sayHi() {
  alert( "Привет" );
}

alert( sayHi ); // выведет код функции

// Функцию можно скопировать в другую переменную
function sayHi() {   // (1)
  alert( "Привет" );
}

var func = sayHi;    // (2)
func(); // Привет    // (3)

sayHi = null;
sayHi();             // ошибка (4)


/*
Function Declaration:

 Function Declaration – функция, объявленная в основном потоке кода.

 «Классическое» объявление функции,
 примеры которого вы можете видеть выше, вида function имя(параметры) {...}
*/
function sum(a, b) {
  return a + b;
}


/*
Function Expression:

 Function Expression – объявление функции в контексте какого-либо выражения,
 например присваивания.
*/
var sum = function(a, b) {
  return a + b;
};


// Основное отличие между ними: функции, объявленные как Function Declaration,
// создаются интерпретатором до выполнения кода.
// Поэтому их можно вызвать до объявления.
//
// А Function Expression создаются в процессе выполнении выражения,
// в котором созданы, в данном случае – функция будет создана при операции
// присваивания sayHi = function...


/*
Условное объявление функции:
*/

// Function Declaration при use strict видны только внутри блока, в котором объявлены.
// Так как код в учебнике выполняется в режиме use strict, то будет ошибка.
// В старом стандарте будет работать
var age = +prompt("Сколько вам лет?", 20);

if (age >= 18) {
  function sayHi() {
    alert( 'Прошу вас!' );
  }
} else {
  function sayHi() {
    alert( 'До 18 нельзя' );
  }
}

sayHi();

// Function Expression отработает без ошибок
var age = prompt('Сколько вам лет?');

var sayHi;

if (age >= 18) {
  sayHi = function() {
    alert( 'Прошу Вас!' );
  }
} else {
  sayHi = function() {
    alert( 'До 18 нельзя' );
  }
}

sayHi();



/*
Анонимные функции
  Функциональное выражение, которое не записывается в переменную,
  называют анонимной функцией.
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);




/*
new Function

 ещё один способ создания функции, который используется очень редко
*/

var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3

/*
!!! NOTICE: Если нет явной причины использовать Function Expression – предпочитайте
            Function Declaration.

 Function Declaration:
  - короче и лучше читается;
  - можно вызывать до того, как они объявлены;
*/











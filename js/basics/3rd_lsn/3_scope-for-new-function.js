/**
 * [[Scope]] для new Function
 */
// При создании функции с использованием new Function, её свойство [[Scope]]
// ссылается не на текущий LexicalEnvironment, а на window.
var a = 1;

function getFunc() {
  var a = 2;

  var func = new Function('', 'alert(a)');

  return func;
}

getFunc()(); // 1, из window

// - Функции, создаваемые через new Function, имеют значением [[Scope]]
//    не внешний объект переменных, а window.
// - Следствие – такие функции не могут использовать замыкание.
//   Если же внешние переменные реально нужны – их можно передать в качестве параметров.


/**
 *  Локальные переменные для объекта.
 *
 *  В этом разделе мы рассмотрим дополнительные примеры использования замыканий.
 */


//### Счётчик-объект.
// Расширим возможности счетчика из предидущего раздела используя в реализации
// полноценный объект вместо ф-ции:
function makeCounter() {
  var currentCount = 1;

  return { // возвратим объект вместо функции
    getNext: function() { // получить значение, то, что раньше делал вызов counter().
      return currentCount++;
    },

    set: function(value) { // установить значение.
      currentCount = value;
    },

    reset: function() { // обнулить счётчик.
      currentCount = 1;
    }
  };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5

// Теперь функция makeCounter возвращает не одну функцию, а объект с несколькими методами.
// Каждый метод получает ссылку [[Scope]] на текущий (внешний) объект переменных.

//### Объект счётчика + функция
// К сожалению, при переходе на объект короткий вызов счетчика counter() пропал,
// вместо него теперь counter.getNext(). Следующая реализация позволит нам сохранить короткий вызов.

function makeCounter() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }

  // ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 1;
  };

  return counter;
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2

counter.set(5);
alert( counter() ); // 5

// Таким образом получился полноценный объект, который можно вдобавок ещё и вызывать.


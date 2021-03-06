/**
 * Управление памятью в JavaScript.
 */

//### Принцип достижимости.
// 1. Определённое множество значений считается достижимым изначально, в частности:
//    - Значения, ссылки на которые содержатся в стеке вызова, то есть – все локальные переменные
//      и параметры функций, которые в настоящий момент выполняются или находятся в ожидании
//      окончания вложенного вызова.
//    - Все глобальные переменные.
//    - Эти значения гарантированно хранятся в памяти. Мы будем называть их корнями.
// 2. Любое другое значение сохраняется в памяти лишь до тех пор, пока доступно из корня по ссылке
//    или цепочке ссылок.

//### Алгоритм сборки мусора
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

var family = marry({
  name: "Василий"
}, {
  name: "Мария"
});


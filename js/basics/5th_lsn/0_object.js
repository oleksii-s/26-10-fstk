/**
 * Объекты – суть, создание.
 * Свойства, методы, проверка наличия свойств.
 * Перебор свойств.
 */

// Объекты в JavaScript сочетают в себе два важных функционала:
//
//   1. ОБъект - это ассоциативный массив: структура,
//   пригодная для хранения любых данных.
//
//   2. Языковые возможности для объектно-ориентированного программирования.

/* ================ Объекты как ассоциативные массивы ================= */

Ассоциативный массив – структура данных, в которой можно хранить любые данные в формате ключ-значение.

Создание объекта
var obj = new Object();
var person = {}; // пустые фигурные скобки

Создание свойств объекта
person.name = 'Вася';
person.age = 25;

Получение свойств объекта
alert( person.name + ': ' + person.age ); // "Вася: 25"

Удаление свойств объекта
delete person.age;

Проверка объекта на наличие свойства
if ("name" in person) {
  alert( "Свойство name существует!" );
}
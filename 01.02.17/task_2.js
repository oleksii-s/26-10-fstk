'use strict';

/*Сравнение объектов по свойству
 - Напишите функцию compareObjects, которая принимает 2 объекта и название свойства,
 по которому   нужно выполнить сравнение объектов, и выводит в консоль свойство name того объекта,
 у которого значение переданного свойства больше.
 - Создайте один объект с помощью литерала, второй через конструктор.
 - Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения*/


function compareObjects(obj1, obj2, prop) {
    if (obj1[prop] > obj2[prop]) console.log(obj1.name);
    else if (obj1[prop] < obj2[prop]) console.log(obj2.name);
    else console.log("Свойства объектов равны");
}


var o1 = {name: "Avalon", age: 33};

var o2 = new Object();
o2.name = "Avalonishche";
o2.age = 29;

compareObjects(o1, o2, 'age');

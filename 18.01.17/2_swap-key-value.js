'use strict';

/*Написать функцию JavaScript, которая принимает объект в качестве параметра. Ф-я должна возвращать копию объекта,
 в котором ключи стали значениями исходного объекта а значения ключами.*/

var user = {
    name: "Vasya",
    surname: "Pupkin",
    age: 25
};

alertObject(user);
alertObject(swapKeyValue(user));

function swapKeyValue(obj) {
    var new_obj = {};
    for (var key in obj){
        new_obj[obj[key]] = key;
    }
    return new_obj;
}

function alertObject(obj) {
    var str = "";
    for (var k in obj) {
        str += k + ": " + obj[k] + "\n";
    }
    console.log(str);
}
/**
 * Created by oleksii-s on 21.12.16.
 */
'use strict';

/*
Важные особенности специальных значений null & undefined
в операциях сравнения:

Значения null и undefined равны друг другу
и не равны чему бы то ни было ещё!!!!!
Это жёсткое правило прописано в спецификации языка.
При преобразовании в число null становится 0, а undefined становится NaN.
*/

// NULL

console.log( null > 0 ); // false
console.log( null == 0 ); // false

// И вдруг ...
console.log(null >= 0); // true

/*
Дело в том, что алгоритмы проверки равенства == и сравнения >= > < <= работают по-разному.
Сравнение честно приводит к числу, получается ноль.
А при проверке равенства значения null и undefined обрабатываются особым образом:
они равны друг другу, но не равны чему-то ещё.
*/

// UNDEFINED

/*
Значение undefined вообще нельзя сравнивать потому,
что undefined при преобразовании к числу даёт NaN.
А значение NaN по стандарту устроено так, что сравнения ==, <, >, <=, >=
и даже === с ним возвращают false
*/

console.log( undefined > 0 ); // false 
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false
/**
 * Created by oleksii-s on 21.12.16.
 */
'use strict';

//Строки сравниваются побуквенно

console.log( 'Б' > 'А' ); // true

/*
При сравнении строк сравниваются численные коды символов.
У каждого символа – свой номер (код в кодировке).
JavaScript использует кодировку Unicode.
В кодировке Unicode обычно код у строчной буквы больше, чем у прописной!
*/

// Если первая буква первой строки больше – значит первая строка больше, независимо от остальных символов:
console.log( 'Банан' > 'Аят' );

// Если одинаковы – сравнение идёт дальше. Здесь оно дойдёт до третьей буквы:
console.log( 'Вася' > 'Ваня' ); // true, т.к. 'с' > 'н'

// При этом любая буква больше отсутствия буквы:
console.log( 'Привет' > 'Прив' ); // true, так как 'е' больше чем "ничего".
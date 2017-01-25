'use strict';

/*Написать функцию JavaScript, которая принимает строку в качестве параметра и находит самое длинное слово в строке.*/

findLongestWord("Написать функцию JavaScript, которая принимает строку в качестве параметра.");

function findLongestWord(str) {
    // убираем со строки все знаки препинания
    var clean_str = str.replace(/[/.,!?;]*/g, '');

    // разбиваем строку на отдельные слова и записываем каждое слово в массив, как отдельный элемент массива
    var arr_str = clean_str.split(" ");

    // находим слово с максимальной длиной
    var max = 0;
    var longest_word;
    for (var i = 0; i < arr_str.length; i++) {
        if (arr_str[i].length > max) {
            max = arr_str[i].length;
            longest_word = arr_str[i];
        }
    }

    console.log(longest_word + " - " + max);
}

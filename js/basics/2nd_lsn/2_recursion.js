/**
 * Created by oleksii-s on 21.12.16.
 */


/*
Рекурсия, стек

Рекурсия – когда функция вызывает сама себя (рекурсивный вызов ф-ции).

Рассмотрим пример функции вычисления степени числа
pow(x, n) = x * pow(x, n - 1)
Последовательность вычисления 2 в 4й степени

pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
*/
function pow(x, n) {
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

console.log( pow(2, 3) ); // 8

// Значение, на котором рекурсия заканчивается называют базисом рекурсии.

// Общее количество вложенных вызовов называют глубиной рекурсии.

// Максимальная глубина рекурсии в браузерах ограничена, точно можно рассчитывать
// на 10000 вложенных вызовов, но некоторые интерпретаторы допускают и больше.



/*
Контекст выполнения, стек

Чтобы понять как работают рекурсивные вызовы, рассмотрим как вообще
работают функции, что происходит при вызове.

  У каждого вызова функции есть свой «контекст выполнения» (execution context).

Контекст выполнения – это служебная информация, которая соответствует текущему
запуску функции. Она включает в себя локальные переменные функции и конкретное
место в коде, на котором находится интерпретатор.

Для нового вызова создаётся свой контекст выполнения, и управление переходит в него,
а когда он завершён – старый контекст достаётся из стека и выполнение внешней функциивозобновляется.

При любом вложенном вызове JavaScript запоминает текущий контекст выполнения в специальной
внутренней структуре данных – «стеке контекстов».

Пример с pow(2, 3);
Контекст: { x: 2, n: 3, строка 22 }
Контекст: { x: 2, n: 2, строка 22 }
Контекст: { x: 2, n: 1, строка 20 }

Любая рекурсия может быть переделана в цикл. Как правило, вариант с циклом будет эффективнее.
*/

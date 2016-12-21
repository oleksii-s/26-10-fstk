'use strict';

// Homework (yet another)
(function() {

  var dateOfBirth = getDateOfBirth(),
      age = getAge(dateOfBirth);

  greetUser(age);

  function getDateOfBirth() {
    var defaultMessage = 'Введите дату рождения?',
      wrongDateMessage = 'Год рождения введен не верно. Введите правильный год рождения.',
      emptyDateMessage = 'Ошибочно отправлено пустое поле. Введите год рождения.';

    var userInput = prompt(defaultMessage, '');

    while (isNotCorrect(userInput)) {
      var massage = userInput === '' ? emptyDateMessage : wrongDateMessage;
      userInput = prompt(massage, '');
    }

    return new Date(userInput);
  }

  function isNotCorrect(date) {
    if (!date) return true;

    var arrAge = date.split('/'),
      month = +arrAge[0] - 1,
      day = +arrAge[1],
      year = +arrAge[2],
      birthDate = new Date(year, month, day),
      today = new Date();

    today.setHours(0, 0, 0, 0);

    var isRealDate = birthDate.getMonth() === month && birthDate.getDate() === day && birthDate.getFullYear() === year;

    return !isRealDate || isNaN(Date.parse(date)) || birthDate.toDateString() >= today.toDateString();
  }

  function getAge(dateString) {
    var today = new Date(),
      birthDate = new Date(dateString),
      age = today.getFullYear() - birthDate.getFullYear(),
      m = today.getMonth() - birthDate.getMonth();

    return (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) ? age-- : age;
  }

  function greetUser(age) {
    switch (true) {
      case age <= 24:
        alert( 'Привет дружище!' );
        break;
      case 25 <= age && age <= 49:
        alert( 'Добрый день!' );
        break;
      case age >= 50 && age <= 119:
        alert( 'Приветствуем Вас!' );
        break;
      default:
        alert( 'Вы рекорсмен по продолжительности жизни!' );
    }
  }
}());


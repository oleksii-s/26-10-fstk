//Создать страницу, которая запрашивает год рождения посетителя.


var years = prompt('Год Вашего рождения?', '');

// Проверяем,что отправил посетитель.

if (!years) {

    // это план Б, тоесть если пользователь отправил пустую форму.
    var yearsB = prompt("Ошибочно отправлено пустое поле. Введите год рождения.", '');
    //После получения данных, нужно вывести приветственное сообщение в зависимости от возраста посетителя.
    if (yearsB > 1991 && yearsB < 2016) {
        alert("Привет дружище!");
    } else if (yearsB >= 1966 && yearsB <= 1991) {
        alert("Добрый день!");
    } else if (yearsB >= 1916 && yearsB < 1966) {
        alert("Приветствуем Вас!");
    } else
        alert("Год рождения введен не верно. Введите правильный год рождения.");
}
else {
    //если все нормально.
    //После получения данных, нужно вывести приветственное сообщение в зависимости от возраста посетителя.
    if (years > 1991 && years < 2016) {
        alert("Привет дружище!");
    } else if (years >= 1966 && years <= 1991) {
        alert("Добрый день!");
    } else if (years >= 1916 && years < 1966) {
        alert("Приветствуем Вас!");
    } else
        alert("Год рождения введен не верно. Введите правильный год рождения.");
}
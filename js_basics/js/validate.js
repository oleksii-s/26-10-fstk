/**
 * Created by Ходаковский Алексей on 12.12.2016.
 */
document.getElementById("submit").onclick = function () {
    var yearOfClientBirth = parseInt(document.getElementById("date").value);
    checkDateOfBirth(yearOfClientBirth);
};


function checkDateOfBirth(yearOfClientBirth) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var age = currentYear - yearOfClientBirth;
    var greeting = document.getElementById("greeting");
    var form = document.getElementById("form");
    var formHeader = document.getElementById("form_header");

    switch (true) {
        case (0 < age && 25 > age):
            greeting.innerHTML = "Привет дружище!";
            greeting.style.display = "block";
            form.style.display = "none";
            form.submit();
            break;
        case (25 <= age && 50 > age):
            greeting.innerHTML = "Добрый день!";
            greeting.style.display = "block";
            form.style.display = "none";
            form.submit();
            break;
        case (50 <= age):
            greeting.innerHTML = "Приветствуем Вас!";
            greeting.style.display = "block";
            form.style.display = "none";
            form.submit();
            break;
        case (isNaN(age)):
            formHeader.innerHTML = "Ошибочно отправлено пустое поле. Введите год рождения.";
            formHeader.style.color = "red";
            break;
        case (100 <= age || 0 > age):
            formHeader.innerHTML = "Год рождения введен не верно. Введите правильный год рождения.";
            formHeader.style.color = "red";
            break;
    }
}
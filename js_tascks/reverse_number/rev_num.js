
//Напишите JavaScript функцию, 
// которая в качестве значения принимает число
// и возвращает его в обратном порядке (реверс).
  //  Пример х = 32243;
//Ожидаемый результат: 34223


var inNam = prompt("Введите число");

function revNum() {


  var rNum = alert(inNam.split("").reverse().join(""));
  return rNum;
}

revNum();

//Напишите JavaScript программу 
//которая принимает случайное число от 1 до 10,
// затем пользователю будет предложено ввести номер от 1 до 10 наугад.
//Если введенное пользователем число совпадает с числом принятым программой,
//программа отобразит сообщение "Отличная работа"
//в противном случае на дисплее появится сообщение "Неудача".


var mashinNum = 3;
var userNum = prompt("Введите любую цыфру от 0 до 10", "например - 5");
if (userNum == NaN || userNum == '') {
    var userNum = prompt("Введите любую цыфру от 0 до 10", "например - 5");
    if (mashinNum == userNum) {
        alert("Отличная работа!!!");
    } else {
        alert("Неудача!");
    }
} else {
    if (mashinNum == userNum) {
        alert("Отличная работа!!!");
    } else {
        alert("Неудача!");
    }
}

/*var arr = [1,2,3,4,5,6,7,8,9];
var vinNum=prompt("введите любую цыфру от 1 до 10","1")

arr.forEach(function(item, values, arr) {
  if(vinNum==values){
       alert( "win!!!!" );
      
  } else{
      alert("not win!!!");
      
  }
});
*/
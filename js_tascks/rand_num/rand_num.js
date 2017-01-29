//Напишите JavaScript программу, 
//которая вернет ряд целых чисел в диапазоне (х, у).
//Пример: Диапазон (2, 9)
//Ожидаемые результаты: [3, 4, 5, 6, 7, 8]




var num=prompt("Введите первое число","например - 10");
var num2 = prompt("Введите второе число","например - 20");

function randNum(x,y){
    var arr=[];
    for(var i=x;i<y;i++){
        arr.push(i);
    }
   return alert(arr);
}

randNum(num,num2);
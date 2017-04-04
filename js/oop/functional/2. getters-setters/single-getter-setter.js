/**
 * Created by oleksii-s on 16.03.17.
 */
function Kettle(power, capacity) {
  var waterAmount = 0;

  this.waterAmount = function(amount) {
    // вызов без параметра, значит режим геттера, возвращаем свойство
    if (!arguments.length) return waterAmount;

    // иначе режим сеттера
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

}

var kettle = new Kettle(1000, 500);
kettle.waterAmount(450);
alert( kettle.waterAmount() ); // 450

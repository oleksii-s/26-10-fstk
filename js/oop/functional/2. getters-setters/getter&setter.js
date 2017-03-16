/**
 * Created by oleksii-s on 16.03.17.
 */
function Kettle(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  // Сеттер
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  // Геттер
  this.getWaterAmount = function() {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.boil = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

var kettle = new Kettle(1000, 500);
kettle.setWaterAmount(600); // ошибка (льем больше объема)
alert( kettle.getWaterAmount() );

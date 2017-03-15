/**
 * Created by oleksii-s on 16.03.17.
 */

"use strict";

function Kettle(power) {

  this.waterAmount = 0;

  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;

  // расчёт времени для кипячения
  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // !!!!!!!!!!!!!!!! ошибка!
  }

  // .bind(context)
  // var getBoilTime = function() {
  //   return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  // }.bind(this);

  // что делать по окончании процесса
  function onReady() {
    alert( 'Вода вскипела!' );
  }

  this.boil = function() {
    setTimeout(onReady, getBoilTime());

    // .call(context)
    // setTimeout(onReady, getBoilTime.call(this));
  };

}

var kettle = new Kettle(1000);
kettle.waterAmount = 200;

kettle.boil();

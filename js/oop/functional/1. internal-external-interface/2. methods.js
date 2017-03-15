/**
 * Created by oleksii-s on 16.03.17.
 */
"use strict";

/**
 * Public/Private methods.
 */
function Kettle(power) {

  this.waterAmount = 0;

  // расчёт времени для кипячения
  function getBoilTime() {
    return 1000;
  }

  // что делать по окончании процесса
  function onReady() {
    alert( 'Вода вскипела!' );
  }

  this.boil = function() {
    // setTimeout - встроенная функция,
    // она запустит onReady через getBoilTime() миллисекунд
    setTimeout(onReady, getBoilTime());
  };
}

var kettle = new Kettle(100);
kettle.waterAmount = 200;

kettle.boil();
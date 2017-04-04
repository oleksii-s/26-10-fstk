/**
 * Created by oleksii-s on 16.03.17.
 */
"use strict";
/**
 * доступ к объекту из внутреннего метода
 * Call / bind / this
 *
 * @param power
 * @constructor
 */
function Kettle(power) {

  this.waterAmount = 0;

  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;



  // Привязка через .bind(context)
  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }.bind(this);

  // ИЛИ Сохранение this в замыкании

  // var self = this;
  //
  // function getBoilTime() {
  //   return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  // }



  // что делать по окончании процесса
  function onReady() {
    alert( 'Вода вскипела!' );
  }

  this.boil = function() {
    setTimeout(onReady, getBoilTime());

    // ИЛИ
    // .call(context)
    // setTimeout(onReady, getBoilTime.call(this));
  };

}

var kettle = new Kettle(1000);
kettle.waterAmount = 200;

kettle.boil();

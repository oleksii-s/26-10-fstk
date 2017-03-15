/**
 * Created by oleksii-s on 16.03.17.
 */
"use strict";

/**
 * Public/Private properties.
 */
function Kettle(power) {
  this.waterAmount = 0; // количество воды в кофеварке

  alert( 'Создана чайник мощностью: ' + power + ' Ватт' );
}

// создать чайник
var kettle = new Kettle(100);

// залить воды
kettle.waterAmount = 200;

/**
 * Created by oleksii-s on 16.03.17.
 */
// Переопределение методов =========================================================

function Appliance(power) {
  this._enabled = false;

  var self = this;

  this.enable = function() {
    // используем внешнюю переменную вместо this
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };

}

function Kettle(power) {
  Appliance.apply(this, arguments);

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  var parentEnable = this.enable;
  this.enable = function() {
    parentEnable(); // теперь можно вызывать как угодно, this не важен
    this.boil();
  };

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.boil = function() {
    setTimeout(onReady, 1000);
  };

}

var kettle = new Kettle(10000);
kettle.setWaterAmount(50);
kettle.enable();

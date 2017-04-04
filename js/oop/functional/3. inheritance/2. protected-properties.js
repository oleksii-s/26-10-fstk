/**
 * Created by oleksii-s on 16.03.17.
 */
// Защищённые свойства =========================================================

function Appliance() {
  this._enabled = false; // вместо var enabled

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function Kettle(power) {
  Appliance.call(this);

  this.enable();

  alert( this._enabled ); // true
}

var kettle = new Kettle(10000);

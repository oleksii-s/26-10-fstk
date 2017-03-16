/**
 * Created by oleksii-s on 16.03.17.
 */
// Наследование от Appliance =========================================================

function Appliance() {
  var enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}

function Kettle(power) {
  Appliance.call(this); // отнаследовать

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var kettle = new Kettle(10000);

kettle.enable();
kettle.setWaterAmount(100);
kettle.disable();

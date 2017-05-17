function Event(name){
  this.name = name;
  this.callbacks = [];
}

Event.prototype.registerCallback = function(callback){
  this.callbacks.push(callback);
};

function EventAggregator(){
  this.events = {};
}

EventAggregator.prototype.registerEvent = function(eventName){
  this.events[eventName] = new Event(eventName);
};

EventAggregator.prototype.triggerEvent = function(eventName, eventArgs){
  this.events[eventName].callbacks.forEach(function(callback){
    callback(eventArgs);
  });
};

EventAggregator.prototype.addEventListener = function(eventName, callback){
  this.events[eventName].registerCallback(callback);
};
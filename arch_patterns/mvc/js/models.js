function TasksModel() {
    this.data = {};
}

TasksModel.prototype.get = function() {
    return this.data;
};

TasksModel.prototype.add = function(name) {
    this.data[(new Date()).getTime()] = name;
    eventAggregator.triggerEvent('UpdateList');
};

TasksModel.prototype.delete = function(id) {
    delete this.data[id];
    eventAggregator.triggerEvent('UpdateList');
};

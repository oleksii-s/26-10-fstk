function ListPresenter() {
	var view,
		model;

    function init() {
        model = new TasksModel();
        view = new ListView(model.get());

        view.taskSubmitHandler(function(taskTitle) {
            model.add(taskTitle);
        });

        view.taskCompletedHandler(function(id) {
            model.delete(id);
        });

        eventAggregator.registerEvent('UpdateList');
        eventAggregator.addEventListener('UpdateList', function() {
            view.updateView(model.get());
        });
    }

    init();

    return {
        getView: function() {
            return view;
        }
    };
}

function ListController() {
    var view,
        model;

		function init() {
        model = new TasksModel();
        view = new ListView(model);

        view.taskSubmitHandler(function(taskTitle) {
            model.add(taskTitle);
        });

        view.taskCompletedHandler(function(id) {
            model.delete(id);
        });
    }

	init();

    return {
        getView: function() {
            return view;
        }
    };
}

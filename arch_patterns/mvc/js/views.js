function ListView(_model) {
    var model,
        html;

    function init(initialModel) {
        model = initialModel;
        html = $("<div>" +
            "<h1>MVC - <small>TODO app</small></h1>" +
            "<h2>Tasks:</h2>" +
            "<ul id='task-list'></ul>" +
            "<h3>Create new task:</h3>" +
            "<input id='task-input' placeholder='I need to do'/>" +
            "<input id='submit-task' type='submit' value='+'/>" +
            "</div>");        

        eventAggregator.registerEvent('UpdateList');
        eventAggregator.addEventListener('UpdateList', function() {
            updateView();
        });

        updateView();
    }

    function updateView() {
        var items = "";

        $.each(model.get(), function(id, name) {
            items += getTaskMarkup(id, name)
        });

        html.find('#task-list').html($(items));
    }

    function getTaskMarkup(id, name) {
	    return "<li><input id='" + id + "' type='checkbox'/><label for='" + id + "'>" + name + "</label></li>"
    }

    init(_model);

	return {
		getHtml: function () {
			return html;
		},
		taskSubmitHandler: function (handler) {
			html.find("#submit-task").click(function () {
				var newTaskTitle = html.find("#task-input").val();
				html.find("#task-input").val("");
				handler(newTaskTitle);
			});
		},
		taskCompletedHandler: function (handler) {
			html.on('click', 'input', function () {
				handler($(this).attr('id'));
			});
		}
	};
}

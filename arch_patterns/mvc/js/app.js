var eventAggregator = new EventAggregator(),
    todoList = new ListController(),
	markup = todoList.getView().getHtml();

$("body").append(markup);

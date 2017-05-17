var eventAggregator = new EventAggregator(),
	todoList = new ListPresenter(),
	markup = todoList.getView().getHtml();

$("body").append(markup);

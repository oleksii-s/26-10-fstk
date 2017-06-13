ReactDOM.render(
    <div>
        <h1 id="title">
            Hello React
        </h1>
        <p>Welcome to React</p>
    </div>,    // элемент, который мы хотим создать
    document.getElementById("container")    // где мы этот элемент хотим создать
)

=================== VS =====================

const element = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "title" },
        "Hello React"
    ),
    React.createElement(
        "p",
        null,
        "Welcome to React"
    )
)
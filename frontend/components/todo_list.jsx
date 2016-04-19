var React = require("react");
var TodoStore = require("../stores/todo_store");

var TodoList = React.createClass({
  getInitialState: function () {
    return {todos: TodoStore.all()};
  },

  todosChanged: function () {
    this.setState({todos: TodoStore.all()});
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function () {
    var todoObjects = [];
    var todos = this.state.todos;

    for (var id in todos) {
      todoObjects.push(todos[id]);
    }

    todos = todoObjects.map(function(todo) {
      return <li key={todo.id}>{todo.title}</li>;
    });

    return (
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;

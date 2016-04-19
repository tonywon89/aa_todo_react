var React = require("react");
var TodoStore = require("../stores/todo_store");
var TodoListItem = require("./todo_list_item");

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
      return <TodoListItem key={todo.id} todo={todo}/>;
    });

    return (
      <div>
        {todos}
      </div>
    );
  }
});

module.exports = TodoList;

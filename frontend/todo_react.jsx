var React = require("react");
var ReactDOM = require("react-dom");
var TodoList = require("./components/todo_list");
var TodoForm = require("./components/todo_form");

var Todos = React.createClass({
  render: function(){
    return (
      <div>
        <TodoList />
        <TodoForm />
      </div>);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Todos />, document.getElementById('root'));
});

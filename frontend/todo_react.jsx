var React = require("react");
var ReactDOM = require("react-dom");
var TodoList = require("./components/todo_list");

var Todos = React.createClass({
  render: function(){
    return (<div></div>);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<TodoList />, document.getElementById('root'));
});

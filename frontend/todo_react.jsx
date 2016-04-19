var React = require("react");
var ReactDOM = require("react-dom");
var TodoStore = require("./stores/todo_store");

var Todos = React.createClass({
  render: function(){
    TodoStore.fetch();
    return (<div></div>);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Todos />, document.getElementById('root'));
});

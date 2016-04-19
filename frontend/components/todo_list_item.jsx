var React = require('react');

var TodoListItem = React.createClass({
  render: function () {
    return (
      <div key={this.props.todo.id}>
        <div>{this.props.todo.title}</div>
        <div>{this.props.todo.body}</div>
      </div>
    );
  }
});

module.exports = TodoListItem;

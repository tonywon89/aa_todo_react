var _todos = {};
var _callbacks = [];

var TodoStore = {
  changed: function() {
    for (var i = 0; i < _callbacks.length; i++) {
      _callbacks[i]();
    }
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === cb) {
        _callbacks.splice(i, 1);
        return;
      }
    }
  },

  all: function () {
    // Cloning _todos
    return JSON.parse(JSON.stringify(_todos));
  },

  addTodo: function(todo) {
    _todos[todo.id] = todo;
  },

  fetch: function () {
    var self = this;
    $.ajax({
      url: "/api/todos",
      method: "GET",
      success: function (todos) {
        _todos = {};
        todos.forEach(function(todo) {
          self.addTodo(todo);
        });
        self.changed();
      }
    });
  },

  create: function (todo) {
    var self = this;
    $.ajax({
      url: "/api/todos",
      method: "POST",
      data: {todo: todo},
      success: function (responseTodo) {
        self.addTodo(responseTodo);
        self.changed();
      }
    });
  },

  destroy: function (id) {
    if (_todos[id]) {
      var self = this;
      $.ajax({
        url: "/api/todos/" + id,
        method: "DELETE",
        success: function (response) {
          delete _todos[id];
          self.changed();
        }
      });
    }
  },

  toggleDone: function (id) {
    var self = this;
    $.ajax({
      url: "/api/todos/" + id,
      method: "PATCH",
      success: function(todo) {
        _todos[id] = todo;
        self.changed();
      }
    });
  }
};

module.exports = TodoStore;

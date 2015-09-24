var Reflux = require('reflux');
var TodoActions = require('./actions/TodoActions');

var _todos = {};

function create(text) {
  var id = (+new Date()+Math.floor(Math.random()*999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}
var TodoStore = Reflux.createStore({
  listenables: [TodoActions],
  getAll:function () {
    return _todos;
  },
  onCreateTodo: function (todo) {
    create(todo.text);
  }
});

module.exports = TodoStore;

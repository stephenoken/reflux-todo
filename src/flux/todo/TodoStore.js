var Reflux = require('reflux');
var TodoActions = require('./actions/TodoActions');

var _todos = getTodos();
function getTodos() {
  try {
      return JSON.parse(localStorage["todos"]);
  } catch (e) {
      return {};
  }
}
function persistTodos() {
  try {
    localStorage["todos"] = JSON.stringify(_todos);
  } catch (e) {
    console.error(`Error Saving Todo: ${e}`);
  }
}
function create(text) {
  var id = (+new Date()+Math.floor(Math.random()*999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
  persistTodos();
}

function update(id, text) {
  _todos[id].text = text;
  persistTodos();
}
var TodoStore = Reflux.createStore({
  listenables: [TodoActions],
  getAll:function () {
    return _todos;
  },
  onCreateTodo: function (todo) {
    create(todo);
  },
  clearAll: function () {
    _todos = {};
  },
  onUpdate: function (id, text) {
    update(id, text);
  }
});

module.exports = TodoStore;

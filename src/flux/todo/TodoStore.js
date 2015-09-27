var Reflux = require('reflux');
var TodoActions = require('./actions/TodoActions');
try {
  var _todos = JSON.parse(localStorage["todos"]);
} catch (e) {
  console.error(`Error Getting Todos: No saved todos available.`);
  var _todos = {};
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

var TodoStore = Reflux.createStore({
  listenables: [TodoActions],
  getAll:function () {
    return _todos;
  },
  onCreateTodo: function (todo) {
    create(todo);
  }
});

module.exports = TodoStore;

var Reflux = require('reflux');
var TodoActions = require('./actions/TodoActions');

var _todos = [];
var TodoStore = Reflux.createStore({
  listenables: [TodoActions],
  getAll:function () {
    return _todos;
  }
});

module.exports = TodoStore;

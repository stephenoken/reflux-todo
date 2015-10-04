var Reflux = require('reflux');
var TodoActions = Reflux.createActions(
  [
    'getAll',
    'createTodo',
    'clearAll',
    'update'
  ]
);

module.exports = TodoActions;

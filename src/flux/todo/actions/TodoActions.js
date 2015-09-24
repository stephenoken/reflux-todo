var Reflux = require('reflux');
var TodoActions = Reflux.createActions(
  [
    'getAll',
    'createTodo'
  ]
);

module.exports = TodoActions;

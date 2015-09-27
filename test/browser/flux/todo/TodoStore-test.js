var expect = require('chai').expect;

describe("TodoStore", function () {
  var TodoStore,TodoActions;
  var actionTodoCreate = {
    text: 'foo'
  };

  beforeEach(function () {
    TodoStore = require('./../../../../src/flux/todo/TodoStore');
    TodoActions = require('./../../../../src/flux/todo/actions/TodoActions');
  });

  afterEach(function () {
    localStorage.clear();
  });

  it("imports TodoStore", function () {
    expect(TodoStore).not.to.be.empty;
  });

  it("is configured", function () {
    expect(TodoStore.listenables).to.include(TodoActions);
    expect(TodoActions.getAll).to.be.a('function');
    expect(TodoActions.createTodo).to.be.a('function');
  });

  it("initialise with no to-do items", function () {
    var all = TodoStore.getAll();
    expect(all).to.be.empty;
  });

  it("creates a to-do item", function () {
    TodoStore.onCreateTodo(actionTodoCreate.text);
    var all = TodoStore.getAll();
    var keys = Object.keys(all);
    expect(keys.length).to.be.equal(1);
    expect(all[keys[0]].text).to.be.equal("foo");
  });

  it("persists to-do item in localStorage", function () {
    TodoStore.onCreateTodo(actionTodoCreate.text);
    var all = JSON.parse(localStorage['todos']);
    var keys = Object.keys(all);
    expect(all[keys[0]].text).to.be.equal('foo');
  });

  it("description", function () {

  });
});

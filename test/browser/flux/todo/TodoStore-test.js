var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

require('chai').use(sinonChai);

describe("TodoStore", function () {
  var TodoStore,TodoActions,callback;
  var actionTodoCreate = {
    text: 'foo'
  };
  beforeEach(function () {
    TodoStore = require('./../../../../src/flux/todo/TodoStore');
    TodoActions = require('./../../../../src/flux/todo/actions/TodoActions');
    //Important to use a callback to ensure the method is being mocked.
    callback = sinon.spy();
    sinon.spy(TodoStore,"getAll");
    TodoStore.getAll(callback);
  });

  afterEach(function () {
    TodoStore.getAll.restore();
  });

  it("imports TodoStore", function () {
    expect(TodoStore).not.to.be.empty;
  });

  it("listens to TodoActions", function () {
    expect(TodoStore.listenables[0]).to.be.equal(TodoActions);
  });

  it("register a call to TodoStore", function () {
    TodoActions.getAll();
    expect(TodoStore.getAll).to.be.calledOnce;
  });
  it("initialise with no to-do items", function () {
    var all = TodoStore.getAll();
    expect(all).to.be.empty;
  });
  it("creates a to-do item", function () {
    TodoActions.createTodo(actionTodoCreate);
    var all = TodoStore.getAll();
    var keys = Object.keys(all);
    expect(keys.length).to.be.equal(1);
  });
});

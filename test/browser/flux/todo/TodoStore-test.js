var expect = require('chai').expect;

describe("TodoStore", function () {
  var TodoStore;
  var TodoActions;
  beforeEach(function () {
    TodoStore = require('./../../../../src/flux/todo/TodoStore');
    TodoActions = require('./../../../../src/flux/todo/actions/TodoActions');
  });

  it("imports TodoStore", function () {
    expect(TodoStore).not.to.be.empty;
  });

  it("listens to TodoActions", function () {
    expect(TodoStore.listenables[0]).to.be.equal(TodoActions);
  });

  it("initialise with no to-do items", function () {
    var all = TodoStore.getAll();
    expect(all).to.be.empty;
  });
});

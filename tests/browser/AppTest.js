var expect = require('chai').expect;
describe("App", function () {
  beforeEach(function () {
    var App = require('../../app.js');
  });
  it("imports hapi", function () {
    expect(2+2).to.be.equal(4);
  });
});

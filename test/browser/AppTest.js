var expect = require('chai').expect;
describe("Server", function () {
  var server;
  before(function () {
    server = require('../../app.js');
    // server.connection({ port: 3010 });
  });
  it("imports app module", function () {
    expect(server).not.to.be.empty;
  });
  it("opens connection on port 3000", function () {
    expect(server.info.uri).to.be.equal("http://Stephens-MacBook-Pro.local:3000");
  });
});

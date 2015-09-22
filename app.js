var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname,'dist')
      }
    }
  }
});

server.connection({port:3000});
server.register(Inert,function (err) {
  if(err)
    throw err;
});
  server.path(Path.join(__dirname, 'dist'));

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index:true,
        lookupCompressed: true
      }
    }
  });
  server.start(function () {
    console.log("Server running at : " + server.info.uri);
  });
module.exports = server;

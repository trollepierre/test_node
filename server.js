const Hapi = require("hapi");
const server = new Hapi.Server();
server.connection({port: 3000});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello world!');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

server.route({
      method: 'GET',
      path: '/pokemons',
      handler: function (request, reply) {
        reply([]);
      }
});

server.route({
    method: 'GET',
    path: '/days',
    handler: function (request, reply) {
        reply([]);
    }
});


module.exports = server
const handlers = require('./handlers');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: handlers.helloWorld
    },
    {
        method: 'GET',
        path: '/pokemons',
        handler: handlers.getAllPokemons
    },
    {
        method: 'POST',
        path: '/pokemons',
        handler: handlers.addPokemon
    },
    {
        method: 'GET',
        path: '/days',
        handler: handlers.getDays
    }
]
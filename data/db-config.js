const knex = require('knex');

const config = require('../knexfile.js');

console.log('config', config)

module.exports = knex(config.development);
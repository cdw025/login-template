const knex = require('./connection');

module.exports = {
    getCurrentLocations: function() {
        return knex('currentlocations');
      }
}

exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Complete Sprint',
      description: 'Finish todays sprint and pass',
      completed: false
    },
    {
      name: 'Enjoy the Weekend',
      description: null,
      completed: false
    }
  ]);
};

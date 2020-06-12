
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Computer',
      description: 'This is what allows me to work on the Sprint'
    },
    {
      name: 'Knowledge',
      description: 'Gotta have this if I want to pass'
    },
    {
      name: 'Google Search Bar',
      description: 'To help me at dead-ends'
    },
    {
      name: 'Past Project Files',
      description: 'My number 1 guides for syntax and processes'
    },
    {
      name: 'Coffee',
      description: '1-2 Cups of liquid energy'
    },
    {
      name: 'Keyboard & Mouse',
      description: 'Allows me to type the type and click the click'
    }
  ]);
};

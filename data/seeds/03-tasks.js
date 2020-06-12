
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'Install dependencies',
      notes: 'Placeholder Notes',
      completed: false,
      project_id: 1
    },
    {
      description: 'Write out working code',
      notes: null,
      completed: false,
      project_id: 1
    },
    {
      description: 'Have fun',
      notes: null,
      completed: false,
      project_id: 2
    }
  ]);
};

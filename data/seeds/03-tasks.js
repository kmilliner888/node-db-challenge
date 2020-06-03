
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'study harder on this section', notes: 'look through training kit.', project_id: '1', completed: false},
        {id: 2, description: 'ask for help because you need it', notes: 'reference your notebook.', project_id: '2', completed: false},
        {id: 3, description: 'make it super organized', notes: 'look through training kit.', project_id: '3', completed: false}
      ]);
    });
};

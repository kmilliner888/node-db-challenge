
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'React', description: 'A project using react functional components.', completed: false},
        {id: 2, name: 'API', description: 'A project building a RESTapi.', completed: false},
        {id: 3, name: 'Database', description: 'A project building a database using SQL.', completed: false}
      ]);
    });
};

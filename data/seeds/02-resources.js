
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'conference room 1', description: 'room needed for project', project_id: '1'},
        {id: 2, name: 'computer', description: 'computer needed for project', project_id: '2'},
        {id: 3, name: 'license', description: 'license needed for project', project_id: '3'}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project 1', completed: false},
        {id: 2, name: 'project 2', completed: true},
        {id: 3, name: 'project 3', completed: false}
      ]);
    });
};

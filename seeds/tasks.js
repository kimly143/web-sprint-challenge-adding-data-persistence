exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('tasks').del().then(function() {
		// Inserts seed entries
		return knex('tasks').insert([
			{ id: 1, project_id: 1, description: 'do the thing', completed: false},
			{ id: 2, project_id: 1, description: 'do the thing', completed: false},
			{ id: 3, project_id: 2, description: 'do the thing', completed: true},
			{ id: 4, project_id: 2, description: 'do the thing', completed: true},
			{ id: 5, project_id: 3, description: 'do the thing', completed: false},
			{ id: 6, project_id: 3, description: 'do the thing', completed: false},
			{ id: 7, project_id: 3, description: 'do the thing', completed: true }
		]);
	});
};
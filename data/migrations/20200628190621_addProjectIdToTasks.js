exports.up = function(knex) {
	return knex.schema.table('tasks', (table) => {
		table.integer('project_id');
		table.foreign('project_id').references('projects.id');
	});
};

exports.down = function(knex) {
	return knex.schema.table('tasks', (table) => {
		table.dropForeign('project_id');
		table.dropColumn('project_id');
	});
};

exports.up = function(knex) {
	return knex.schema.createTable('projects_to_resources', (table) => {
		table.increments('id').primary();
		table.integer('project_id');
		table.foreign('project_id').references('projects.id');
		table.integer('resource_id');
		table.foreign('resource_id').references('resources.id');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('projects_to_resources');
};

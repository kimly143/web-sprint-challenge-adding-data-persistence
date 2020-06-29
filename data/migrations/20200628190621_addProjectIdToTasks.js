exports.up = function(knex) {
	return knex.schema.table('tasks', (table) => {
		table.integer('project_id');
        table.foreign('project_id')
            .references('id')
            .inTable("projects")
            .onUpdate('CASCADE')
            .onDelete('DELETE');
	});
};

exports.down = function(knex) {
	return knex.schema.table('tasks', (table) => {
		table.dropColumn('project_id');
	});
};

exports.up = function(knex) {
	return knex.schema.createTable('tasks', (table) => {
		table.increments('id').primary();
		table.string('description').notNullable();
		table.string('notes');
		table.boolean('completed').notNullable().defaultTo(false);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('tasks');
};

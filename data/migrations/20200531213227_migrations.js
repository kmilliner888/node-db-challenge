
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('name', 128).notNullable().unique();
            tbl.text('description');
            tbl.boolean('completed').notNullable();  
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description').notNullable();
            tbl.text('notes');
            tbl.boolean('completed').notNullable();  
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
             
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name', 128).notNullable().unique();
            tbl.text('description')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')
            tbl.primary(['project_id', 'resource_id'])
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};

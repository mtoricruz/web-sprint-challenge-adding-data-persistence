
exports.up = function(knex) {
    return knex.schema
    // ======= PROJECTS TABLE [DONE] ============
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 255)
        tbl.boolean('completed')
            .notNullable();
    })

    // ======= RESOURCES TABLE [DONE] ============
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 255)
    })

    // ======= PROJECT_RESOURCES TABLE [DONE] ============
    .createTable('project_resources', tbl => {
        tbl.increments();
        // foreign keys
        tbl.integer('project_id')
            .unsigned()
            .references('projects.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .references('resources.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })

    // ======= TASKS TABLE [DONE] ============
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 255)
            .unique()
            .notNullable();
        tbl.text('notes', 255)
        tbl.boolean('completed')
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .references('projects.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};


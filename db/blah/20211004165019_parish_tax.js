exports.up = function(knex, Promise) {
    return knex.schema.createTable('parish_tax', table => {
      table.increments('id');
      table.integer('parish_code').unique().notNullable();
      table.decimal('parish_rate', 6, 5);
      table.text('parish_name').notNullable();
      table.integer('parish_gl_num');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('parish_tax');
  };
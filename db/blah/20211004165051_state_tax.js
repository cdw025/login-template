exports.up = function(knex, Promise) {
    return knex.schema.createTable('state_tax', table => {
      table.increments('id');
      table.integer('state_code').unique().notNullable();
      table.decimal('state_rate', 5, 4);
      table.text('state_name').notNullable();
      table.integer('state_gl_num');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('state_tax');
  };


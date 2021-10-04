exports.up = function(knex, Promise) {
    return knex.schema.createTable('rentals', table => {
      table.increments('rental_id');
      table.text('barge_name').unique().notNullable();
      table.text('owner_id');
      table.integer('barge_num');
      table.text('barge_type');
      table.integer('customer_num');
      table.text('customer_name');
      table.date('start_date');
      table.date('end_date');
      table.integer('duration');
      table.integer('barge_rate');
      table.text('rental_status');
      table.text('bill_num');
      table.text('po_num');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('rentals');
  };
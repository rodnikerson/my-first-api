import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('purchases', table => {
        table.increments('id').primary();
        table.string('buyer').notNullable().references('id').inTable('users');
        table.float('totalPrice').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.integer('paid').notNullable();
    });
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('purchases');
}
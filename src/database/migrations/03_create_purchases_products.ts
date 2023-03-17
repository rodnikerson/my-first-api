import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('purchases_products', table => {
        table.string('purchaseId').notNullable().references('id').inTable('purchases');
        table.string('productId').notNullable().references('id').inTable('products');
        table.integer('quantity').notNullable();
    });
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('purchases_products');
}
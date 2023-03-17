import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('purchases_products').insert([
        {
            purchaseId: 1,
            productId: 1,
            quantity: 2
        },
        {
            purchaseId: 2,
            productId: 3,
            quantity: 1
        }
    ]);
}
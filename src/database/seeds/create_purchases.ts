import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('purchases').insert([
        {
            id: 1,
            buyer: 1,
            totalPrice: 109.9,
            paid: 219.8
        },
        {
            id: 2,
            buyer: 1,
            totalPrice: 99.49,
            paid: 99.49
        }
    ]);
}
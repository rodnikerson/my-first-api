import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('users').insert([
        { name: "Admin", email: "admin@admin.com", password: "admin" }
    ]);
}
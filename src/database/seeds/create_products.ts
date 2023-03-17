import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('products').insert([
        {
            name: "Teclado Mecânico",
            price: 109.9,
            description: "Teclado mecânico de switch azul da marca logitech.",
            imageUrl: "https://images.unsplash.com/photo-1595225386386-79c3543adbd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
            name: "Mouse Sem Fio",
            price: 44.9,
            description: "Mouse sem fio de cor branca da marca logitech.",
            imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80"
        },
        {
            name: "Wireless Headset",
            price: 99.49,
            description: "Headset sem fio preto da marca ding.",
            imageUrl: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]);
}
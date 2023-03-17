import { Request, Response, Router } from 'express';
import knex from '../database/connection';
import * as z from 'zod';

const productsRouter = Router();

const productSchema = z.object({
    name: z.string().min(3),
    price: z.number().positive(),
    description: z.string().min(5),
    imageUrl: z.string().url(),
});

productsRouter.get('/', async (request: Request, response: Response) => {
    const { q } = request.query;
    if (q) {
        const products = await knex('products').select('*').where('name', q);
        return response.json(products);
    }
    const products = await knex('products').select('*');
    return response.json(products);
});

productsRouter.post('/', async (request: Request, response: Response) => {
    const validationResult = productSchema.safeParse(request.body);
    if (validationResult.success) {
        const { name, price, description, imageUrl } = validationResult.data;
        await knex('products').insert({
            name,
            price,
            description,
            imageUrl,
        });
        return response.status(201).json({ message: 'Produto cadastrado com sucesso' });
    } else {
        return response.status(400).json({ error: validationResult.error.message });
    }
});

productsRouter.put('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const validationResult = productSchema.safeParse(request.body);
    if (validationResult.success) {
        const { name, price, description, imageUrl } = validationResult.data;
        await knex('products').where({ id }).update({ name, price, description, imageUrl });
        return response.json({ message: 'Produto atualizado com sucesso' });
    } else {
        return response.status(400).json({ error: validationResult.error.message });
    }
});

export default productsRouter;
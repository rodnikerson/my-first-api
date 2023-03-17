import { Request, Response, Router } from 'express';
import knex from '../database/connection';
import * as z from 'zod';

interface Purchase {
    id: string;
    buyer: string;
    totalPrice: number;
    paid: number;
}

interface PurchaseProducts {
    purchaseId: number;
    productId: any;
    quantity: any;
}

interface Product {
    id?: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
}

const purchasesRouter = Router();

const purchaseSchema = z.object({
    id: z.string(),
    buyer: z.string().min(1),
    totalPrice: z.number().positive(),
    products: z.array(
      z.object({
        id: z.string(),
        quantity: z.number().positive(),
        name: z.string(),
        price: z.number(),
        description: z.string(),
        imageUrl: z.string(),
      })
    ).min(1),
  });

purchasesRouter.get('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const purchase = await knex('purchases').where({ id });
    if(purchase.length) return response.status(200).json(purchase);
    return response.json({ message: 'Pedido não existe' })
});

purchasesRouter.post('/', async (request: Request, response: Response) => {

    const { id, buyer, totalPrice, products } = purchaseSchema.parse(request.body);

    const trx = await knex.transaction();

    const purchase: Purchase = {
        id,
        buyer,
        totalPrice,
        paid: 0
    }

    const insertedPurchaseIds = await trx('purchases').insert(purchase);

    const purchaseProducts: PurchaseProducts[] = products.map((product: Product) => {
        return {
            purchaseId: insertedPurchaseIds[0],
            productId: product.id,
            quantity: product.quantity
        };
    });

    await trx('purchases_products').insert(purchaseProducts);

    await trx.commit();

    return response.status(201).send({ message: 'Pedido realizado com sucesso' });

});

purchasesRouter.delete('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    await knex('purchases').where({ id }).del();
    return response.json({ message: 'Pedido cancelado com sucesso' })
})

export default purchasesRouter;

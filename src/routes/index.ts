import { Router } from 'express';
import usersRouter from './users.routes';
import productsRouter from './products.routes';
import purchasesRouter from './purchases.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/products', productsRouter);

routes.use('/purchases', purchasesRouter);

export default routes;
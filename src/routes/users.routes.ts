import { Request, Response, Router } from 'express';
import * as z from 'zod';
import bcrypt from 'bcrypt';
import knex from '../database/connection';

const usersRouter = Router();

usersRouter.get('/', async (request: Request, response: Response) => {
    const users = await knex('users').select('*');
    return response.json(users);
});

const createUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
});

usersRouter.post('/', async (request: Request, response: Response) => {
    const { name, email, password } = createUserSchema.parse(request.body);

    try {
        const user = await knex('users').where({ email }).first();
        if (user) {
            return response.status(400).json({ error: 'Email já cadastrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { name, email, password: hashedPassword };
        await knex('users').insert(newUser);

        return response.status(201).json({ message: 'Cadastro realizado com sucesso' });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: 'Erro na criação, tente novamente' });
    }
});

export default usersRouter;
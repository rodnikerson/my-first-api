# Basic API

<img src="https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w"  width="250" height="250">

Criada como um dos projetos de back-end do bootcamp Labenu, essa API cadastra, edita e deleta usuários e produtos.

## Índice
- <a hef="#func">Funcionalidades do projeto</a>
- <a hef="#howto">Como rodar este projeto</a>
- <a hef="#tech">Tecnologias Utilizadas</a>

<hr/>

## Funcionalidades do projeto

- GET -> usuários, produtos e compras;
- POST -> usuários, produtos e compras;
- PUT -> produtos;
- DELETE -> compras;

## Como rodar este projeto
```bash
# Clone este repositório
$ git clone https://github.com/rodnikerson/my-first-api

# Acesse a pasta do projeto no seu terminal
$ cd my-first-api

# Instale as dependências
$ npm i

# Execute a aplicação
$ npm run dev

# Execute os seguintes comandos
$ npm run knex:migrate
$ npm run knex:seed

# Com o postman ou insomnia, rode os endpoints:
GET ALL USERS: http://localhost:3000/users
GET ALL PRODUCTS: http://localhost:3000/products
GET ALL PRODUCTS (QUERY): http://localhost:3000/products?q=Mouse Sem Fio
GET PURCHASE BY ID: http://localhost:3000/purchases/1

POST USER: http://localhost:3000/users
body = {
    "name": "example",
    "email": "example@gmail.com",
    "password": "examplePassword"
}

POST PRODUCT: http://localhost:3000/products
body = {
    "name": "Webcam Smart",
    "price": 45.49,
    "description": "Webcam de alta qualidade com captura de até 4k da marca Logitech.",
    "imageUrl": "exampleUrl"
}

POST PURCHASE: http://localhost:3000/purchases
body = {
    "id": "1",
    "buyer": "example",
    "totalPrice": 500,
    "products": [
        {
            "id": "3",
            "name": "Mouse gamer",
            "price": 250,
            "description": "Melhor mouse do mercado!",
            "imageUrl": "https://picsum.photos/seed/Mouse%20gamer/400",
            "quantity": 2
        }
    ]
}

PUT PRODUCT: http://localhost:3000/products/:id
body = {
    "name": "Teclado Mecânico RGB",
    "price": 119.9,
    "description": "Teclado mecânico de switch azul da marca logitech!",
    "imageUrl": "exampleUrl"
}

DELETE PURCHASE: http://localhost:3000/purchases/:id
```

## Tecnologias Utilizadas
1. TypeScript
2. NodeJS
3. Express
4. Knex
5. SQLite3
6. Zod
7. Bcrypt

Feito com muito carinho por **Rodolpho Nikerson** :))

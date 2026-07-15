import 'dotenv/config';
import express from 'express';
const app = express();

app.use(express.json());

const port = 3000;

import usersRoutes from './src/routes/users.routes.js';
app.use(usersRoutes);

import productsRoutes from './src/routes/products.routes.js';
app.use(productsRoutes);

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.listen(port, () => {
    console.log(`Servidor ligado em http://localhost:${port}`);
});
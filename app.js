import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const env = process.env;

const port = env.APP_PORT;

import usersRoutes from './src/routes/users.routes.js';
app.use(usersRoutes);

import productsRoutes from './src/routes/products.routes.js';
app.use(productsRoutes);

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.listen(port, () => {
    console.log(`Servidor ligado em http://localhost:${port}`);
});
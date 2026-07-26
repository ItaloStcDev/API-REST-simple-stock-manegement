import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import usersRoutes from './src/routes/users.routes.js';
import productsRoutes from './src/routes/products.routes.js';

const app = express();

const env = process.env;
const port = env.APP_PORT;

const corsOptions = {
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(usersRoutes);
app.use(productsRoutes);

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.listen(port, () => {
    console.log(`URL do server: http://localhost:${port}`);
});
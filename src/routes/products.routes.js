import express from 'express';
const router = express.Router();

import { listAllProducts, listProducts, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import validateUser from '../middlewares/auth.middleware.js';
import { validadeProdReq, validateProdExistence } from '../middlewares/product.middleware.js';

router.get('/products/listAll', listAllProducts);

router.get('/me/products/', validateUser, listProducts);

router.post('/me/products/', validateUser, validadeProdReq, createProduct);

router.put('/me/products/:id', validateUser, validadeProdReq, validateProdExistence, updateProduct);

router.delete('/me/products/:id', validateUser, validateProdExistence, deleteProduct);

export default router;
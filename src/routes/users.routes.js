import express from 'express';
const router = express.Router();

import {userRegister, userLogin} from '../controllers/users.controller.js';
import {validateUserRegister, validadeLoginReq} from '../middlewares/users.middleware.js';

router.post('/register', validateUserRegister, userRegister);

router.post('/login', validadeLoginReq, userLogin);

export default router;
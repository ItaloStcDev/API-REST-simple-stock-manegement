import pool from '../database/db.js';

const validateUserRegister = (req, res, next) => {
    const {username, email, password} = req.body;
    
    if (username === undefined || email === undefined || password === undefined) {
        return res.status(400).send('Fill all the spaces');
    }
    if (username.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
        return res.status(400).send('Fill all the spaces');
    }
    if (!email.includes('@')) {
        return res.status(400).send('Invalid email');        
    }
    if (password.trim().length < 8) {
        return res.status(400).send('Password is too short');
    }

    next();
}

const validadeLoginReq = (req, res, next) => {
    const {email, password} = req.body;
    
    if (password === undefined || email === undefined) {
        return res.status(400).send('Email or password invalid!');
    }
    if (password.trim().length === 0 || email.trim().length === 0) {
        return res.status(400).send('Email or password invalid!');
    }
    if (!email.includes('@')) {
        return res.status(400).send('Invalid email');        
    }
    next();
}

export {
    validateUserRegister,
    validadeLoginReq,
}
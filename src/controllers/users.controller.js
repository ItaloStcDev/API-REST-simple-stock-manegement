import pool from '../database/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {
    const {username, email, password} = req.body;
    const salt = 10;

    try {
        const hash = await bcrypt.hash(password, salt);
        await pool.query('INSERT INTO users (username, email, hash) VALUES ($1, $2, $3)', [username, email, hash]);
        return res.status(201).send('User registered');
    } catch (error) {
        console.error(error.detail);
        if (error.code === '23505') {
            if ((error.detail).includes('username')) return res.status(409).send('Username already registered');

            if ((error.detail).includes('email')) return res.status(409).send('Email already registered');

        } else {
            return res.status(500).send('Internal server error');
        }
    }
}

const userLogin = async (req, res) => {
    const {email, password} = req.body;

    try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rowCount === 0) return res.status(401).send('Email or password invalid');

    const userinfo = result.rows[0];

    const validPassword = await bcrypt.compare(password, userinfo.hash);

    if (!validPassword) return res.status(401).send('Email or password invalid');

    const token = jwt.sign({id: userinfo.id}, process.env.JWT_SECRET, {expiresIn: '12h'});
    
    return res.status(200).json({msg: "Logged in", username: userinfo.username, email: userinfo.email, token: token});
    // return res.status(200).send(req.headers)

    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server login error');
    }
}

export {
    userRegister,
    userLogin,
}
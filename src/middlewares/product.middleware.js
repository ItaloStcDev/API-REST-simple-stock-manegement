import pool from '../database/db.js';

const validadeProdReq = (req, res, next) => {
    const {name, category, quant, value} = req.body;

    if (name === undefined || category === undefined || quant === undefined || value === undefined) {
        return res.status(400).send(`Invalid request`)
    }

    if (name.trim().length === 0 || category.trim().length === 0 || Number(quant) <= 0 || Number(value) <= 0) {
        return res.status(400).send(`Invalid request`)
    }
    
    next()
}

const validateProdExistence = async (req, res, next) => {
    const userId = req.userId;
    const {id} = req.params;
    try {
        const result = await pool.query('SELECT * FROM products WHERE id = $1 AND userId = $2', [Number(id), Number(userId)]);
        if (result.rowCount === 0) {
            return res.status(404).send('Not Found');
        }
        req.product = result.rows[0];
        console.log(req.product);
        next()
    } catch (error) {
        console.error(error);
        return res.status(500).send('Product existence validation error');
    }
}

export {
    validadeProdReq,
    validateProdExistence
}
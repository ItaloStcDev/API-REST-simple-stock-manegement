import pool from '../database/db.js';

const listAllProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error({error: 'listAllError'});
        return res.status(500).send('Internal Server Error');
    }
}

const listProducts = async (req, res) => {
    const userId = Number(req.userId);

    try {
        const result = await pool.query('SELECT * FROM products WHERE userId = $1', [userId]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

const createProduct = async (req, res) => {
    const userId = Number(req.userId);
    const { name, value, quant, category } = req.body;

    try {
        const result = await pool.query('INSERT INTO products (prod_name, prod_value, prod_quant, userid, category) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, Number(value), Number(quant), userId, category]);
        return res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

const updateProduct = async (req, res) => {
    const userId = Number(req.userId);
    const {id} = req.params;
    const { name, value, quant, category } = req.body;

    let result;
    try {
        result = await pool.query('UPDATE products SET prod_name = $1, prod_value = $2, prod_quant = $3, category = $4 WHERE id = $5 AND userid = $6 RETURNING *', [name, Number(value), Number(quant), category, Number(id), Number(userId)]);

        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        return res.status(500).send('could not update');
    }
};

const deleteProduct = async (req, res) => {
    const userId = Number(req.userId);
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM products WHERE userid = $1 AND id = $2 RETURNING *', [Number(userId), Number(id)]);
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).send('could not delete');
    }
};

export {
    listAllProducts,
    listProducts,
    createProduct,
    updateProduct,
    deleteProduct
}
import jwt from 'jsonwebtoken';

const validateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Token not found')
    }

    const token = authHeader.substring(7);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).send('Token invalid');
    }
}

export default validateUser;
import { Pool } from 'pg';

const pool = new Pool({
    user: 'example',
    host: 'example',
    database: 'example',
    password: 'example',
    port: 5432
})

export default pool;
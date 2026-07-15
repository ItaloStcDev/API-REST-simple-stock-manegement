import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'stockv2_db',
    password: 'admin',
    port: 5432
})

export default pool;
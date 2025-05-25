// client.js
// (Zawartość pliku client.js pozostaje taka sama jak w poprzednim przykładzie)
const { Pool } = require('pg');

async function testDatabaseConnection() {
    console.log('🚀 Attempting to connect to PostgreSQL...');
    console.log(`   DB_HOST: ${process.env.DB_HOST}`);
    console.log(`   DB_USER: ${process.env.DB_USER}`);
    console.log(`   DB_NAME: ${process.env.DB_NAME}`);

    const pool = new Pool({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionTimeoutMillis: 10000,
    });

    try {
        const client = await pool.connect();
        console.log('✅ Successfully connected to PostgreSQL!');

        const result = await client.query('SELECT NOW() as now;');
        console.log('🕒 Current time from PostgreSQL:', result.rows[0].now);

        client.release();
        console.log('🚪 Client released.');
    } catch (error) {
        console.error('❌ Error connecting to or querying PostgreSQL:', error.stack);
        process.exit(1);
    } finally {
        await pool.end();
        console.log('💧 Pool has ended.');
    }
}

testDatabaseConnection();
const { Pool, Client } = require('pg');

class UserDao {

    async get(username, password) {
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'restauracja',
            password: 'admin',
            port: 5432,
        });
        await client.connect();

        const res = await client.query(`SELECT * from public."Users" where "Email"='${username}' and "Password"='${password}'`);
        await client.end();

        return res.rows[0];
    }

}


module.exports = new UserDao();
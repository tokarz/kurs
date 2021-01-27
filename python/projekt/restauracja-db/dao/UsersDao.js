const { Pool, Client } = require('pg');

class UserDao {

    async get(username, password) {
<<<<<<< HEAD
    return new Promise(resolve => {
		
		resolve([{name: 'dupa'}]);
	})
	}
=======
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'restauracja2',
            password: 'admin',
            port: 5432,
        });
        await client.connect();

        const res = await client.query(`SELECT * from public."Users" where "Email"='${username}' and "Password"='${password}'`);
        await client.end();

        return res.rows[0];
    }
>>>>>>> 7e96db579286762f567f9ba067f20e827e87a565

}


module.exports = new UserDao();

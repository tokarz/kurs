const { Pool, Client } = require('pg');

class UserDao {

    async get(username, password) {
    return new Promise(resolve => {
		
		resolve([{name: 'dupa'}]);
	})
	}

}


module.exports = new UserDao();

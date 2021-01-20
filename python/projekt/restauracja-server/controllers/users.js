var express = require('express');
var router = express.Router();

const userDao = require('../../restauracja-db/dao/UsersDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(`Request received ${JSON.stringify(req.query)}`);

    const userName = req.query.username;
    const password = req.query.password;

    userDao.get(userName, password).then(user => {
        res.json({ users: [{ name: user }] });
    });

});

module.exports = router;
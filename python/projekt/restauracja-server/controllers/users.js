var express = require('express');
var router = express.Router();

const userDao = require('../../restauracja-db/dao/UsersDao');

/* GET users listing. */
router.get('/', function (req, res, next) {
  userDao.get('username', 'password').then(user => {
    res.json({ users: [{ name: user }] });
  });

});

module.exports = router;

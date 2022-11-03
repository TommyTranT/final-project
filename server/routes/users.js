const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');

/* GET users listing. */
router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

// Register a new user
router.post('/', (req, res) => {
  users.registerNewUser().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

module.exports = router;
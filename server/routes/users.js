const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const users = ['tommytran', 'ryan']
  // ^ This would be our databass call...
  res.json(users);
});

module.exports = router;

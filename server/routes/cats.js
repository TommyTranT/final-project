const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const cats = ['Hello Kitty', 'Garfield', 'Frits']
  // ^ This would be our databass call...
  res.json(cats);
});

module.exports = router;

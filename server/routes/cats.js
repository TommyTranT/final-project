const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const cats = ['Hello Kitty', 'Garfield', 'Frits']
  // ^ This would be our databass call...
  res.json(cats);
});

module.exports = router;

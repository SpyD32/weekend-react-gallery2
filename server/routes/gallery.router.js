const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
console.log('in/api/gallery PUT:', req.body, req.query);
const queryString = `UPDATE "gallary" SET likes=likes +1 WHERE id=$1;`;
const values = [req.query.id];
pool.query(queryString).then((results)=>{
}).catch((error)=>{
  console.log(error);
  res.sendStatus(400); 
})
});

// GET /gallery
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM "gallery" ORDER By id ASC;`
  pool.query(queryString).then((results)=>{
    res.send(results.rows);
  }).catch((error)=>{
    console.log(error);
    res.sendStatus(400)
  })

  // code here
});

module.exports = router;

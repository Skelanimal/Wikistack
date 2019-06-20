const express = require('express');
const { addPage } = require('../views/')
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send('this is get /wiki/')
})

router.post('/', (req, res, next) => {
  res.send('this is POST /wiki')
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router;

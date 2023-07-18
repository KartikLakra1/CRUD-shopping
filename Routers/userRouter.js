const express = require('express')

const {home , men , female , other} = require('../Controllers/userController.js')

const router = express.Router();

router.get('/',home)
router.post('/men', men)
router.post('/female', female)
router.get('/other' , other)

module.exports = router

const express = require('express');

const router = express.Router();

const {createUser,checkUser}  = require('../controller/userController')




// create a user details
router.post('/create',createUser)

// check user details for login
router.post('/read',checkUser)


module.exports = router ;
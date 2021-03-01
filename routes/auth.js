const express =require('express');

const {register,login} = require("../controller/user_controller");


const router = express.Router();

router.post('/register',register);
router.post('/login',login);

module.exports = router;
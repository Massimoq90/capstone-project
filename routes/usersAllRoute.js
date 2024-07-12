const express = require('express');

const router = express.Router();

const UsersModel = require('../models/userSchema');

const UsersMiddlewares = require('../middlewares/usersMiddlewares');


router.get('/', UsersMiddlewares,  async (req, res) => {
    const allUsers = await UsersModel.find();
    return res.status(200).json(allUsers)
})


module.exports = router;
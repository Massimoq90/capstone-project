const express = require('express');

const router = express.Router();

const UsersModel = require('../models/userSchema');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const secretKey = 'secretKey';

//oggetto che mi inviarà il client 

// "userName": "massimoq90",
// "name": "massimo",
// "surName": "quartarone",
// "ageOfBirth":"33",
// "phone": "3284668225",
// "email": "massimo@example.com",
// "password":"passsword!"

router.post('/register', (req, res) => {
    // logica per la registrazione di un utente

    // const obj = req.body;
    // obj.verified = false;
    // const user = new UsersModel(obj);
    // await user.save();
    // res.status(201).json(obj);

    const password = req.body.password

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const user = new UsersModel({
                ...req.body,
                password: hash
            });
            await user.save();
            return res.status(200).json(user);
        });
    });
})

router.post('/login', async (req, res) => {
    // logica per il login di un utente
    const email = req.body.email;
    const password = req.body.password;

    const userLogin = await UsersModel.findOne({ email: email });
    if (userLogin) {

        const log = bcrypt.compare(password, userLogin.password);

        if (log) {
            const token = jwt.sign(
                {
                    id: userLogin.id,
                    email: userLogin.email,
                    surname: userLogin.surName,
                    username: userLogin.userName,
                }, secretKey, { expiresIn: '1h' });
            return res.status(200).json(token);

        } else {

            return res.status(404).json({ message: 'Invalid Password' });
        }

    } else {

        return res.status(404).json({ message: 'Invalid Email' });
    }

})

module.exports = router;
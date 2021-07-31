const express = require('express');
const mongoose = require('mongoose')
const userSchema = require('../schema/user');
const router = express.Router()

router.get('/set', (req, res) => {
    console.log('get called');

    const user = mongoose.model('user', userSchema);

    user.create({
        name: req.query.name,
        password: req.query.password,
        age: req.query.age,
        dob: req.query.dob
    }, (err, doc) => {
        console.log(err);
        console.log(doc);
    })

    res.send("Success!")
})

router.post('/set', (req, res) => {
    console.log('Post called');
    const user = mongoose.model('user', userSchema);

    user.create({
        name: req.body.name,
        password: req.body.password,
        age: req.body.age,
        dob: req.body.dob
    }, (err, doc) => {
        console.log(err);
        console.log(doc);
    })

    res.send("Success!")
})

router.get('/getUserByName', (req, res) => {
    const user = mongoose.model('user', userSchema);
    console.log(req.query);
    user.find({ name: req.query.name }, (err, doc) => {
        console.log(err);
        res.send({ usersData: doc })
    })
})

module.exports = router
'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res, next)=> {
    console.log('User details fetched');
});

router.post('/', (req, res, next)=> {
    User.create(req.body).then((user)=> {
        res.json('Success !!!');
    }).catch((err)=> {
        err.errors.forEach(error=> {
            console.log(error.message);
            res.status(500).send('Could not create user');
        });
    });
});

module.exports = router;
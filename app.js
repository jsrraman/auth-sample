'use strict';

let express = require('express')
    , app = express()
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy
    , passportAuth = require('./auth/passportAuth');

let defaultRoute = require('./routes/default')
    , userRoute = require('./routes/user');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

// Setup routing
app.use('/', defaultRoute);
app.use('/user', userRoute);

app.use((req, res, next)=> {
    //let err = new Error('Not Found');
    //err.status = 404;
    res.status(404).end('<h1>Page not found</h1>');
});

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
});
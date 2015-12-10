'use strict';

let Sequelize = require('sequelize')
    , fs = require('fs')
    , path = require('path')
    , defaultDbUrl = JSON.parse(fs.readFileSync(path.join("__dirname", "../", "devConfig.json")))['db']['defaultUrl']
    , sequelize = new Sequelize(defaultDbUrl);


let User = sequelize.define('user_account', {
    name: {
        type: Sequelize.STRING, allowNull: false, unique: true
    },
    email: {
        type: Sequelize.STRING, allowNull: false, unique: true
    }
});

//User.sync({force: true}).then(()=> {
//    console.log('user_account table created');
//});

module.exports = User;
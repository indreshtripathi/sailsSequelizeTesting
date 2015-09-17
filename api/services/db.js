var Sequelize = require('sequelize');
var sequelize = new Sequelize('dbmtv_develop', 'root', '123456', {
    host: "127.0.0.1",
    port: 3306
});

module.exports = {

    UserModel: require('../models/User.js')(sequelize, Sequelize),
    sequelize: sequelize

};
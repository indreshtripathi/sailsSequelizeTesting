module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }

    });

    return User;

};

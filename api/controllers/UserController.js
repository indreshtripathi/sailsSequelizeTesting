var db = require('../services/db.js');

module.exports = {

    //API to create a new user
    create: function (req, res, next) {

        var params = req.body;
        var userSchema = db.UserModel;

        try {

            db.sequelize.sync().then(function () {

                userSchema.create({
                        "email": "jaseem.abbas@tecsolsoftware.com",
                        "firstname": "Jaseem",
                        "lastname": "Abbas"
                    })
                    .then(function (user) {
                        res.json({
                            success: true,
                            userData: user.get({
                                plain: true
                            })
                        });
                    })
            });
        } catch (ex) {
            res.json({
                success: false,
                exception: ex
            });
            return;
        }
    }

};
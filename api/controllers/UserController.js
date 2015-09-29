var db = require('../services/db.js');
var fs = require('fs');
var csv = require('csv');



module.exports = {

  //API to create a new user

  create: function (req, res, next) {

    var params = req.body;
      var userSchema = db.UserModel;
      try {

        db.sequelize.sync().then(function (params) {
            userSchema.create({
            "email": req.body.email,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
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
    },

    // finding users
    find:  function (req, res, next) {
      var userSchema = db.UserModel;
      var params={};
      var id = req.param('id');

      try {
          if(id)
            params={where:{"userId":id}}

        userSchema.findAll(params).then(function (user) {
            console.log(user);
            return res.json({
              success:true,
              userData:user
            });

          });

      } catch (ex) {
        res.json({
          success: false,
          exception: ex
        });
        return;
      }
    },

    //Destroying records
 destroy:  function (req, res, next) {

   var userSchema = db.UserModel;
   var params={};
   var id = req.param('id');
   params={where:{"userId":id}}
   try {

       userSchema.destroy(params)
     return res.json({success:true});
   } catch (ex) {
     res.json({
       success: false,
       exception: ex
     });
     return;
   }
 },

    // updating user
    update: function (req, res, next) {

      var updates=req.body;
      var params={};
      var id = req.param('id');
      params={where:{"userId":id}}

      var userSchema = db.UserModel;
      try {

          userSchema.update(updates,params)
        return res.json({success:true});

      } catch (ex) {
        res.json({
          success: false,
          exception: ex
        });
        return;
      }
    },
  //creating users using csv file

      import: function(req,res,next){
        var fs = require("fs");
        var pathToFile = 'D:/tecsol/mtv/csvdata.csv';
        var buf = fs.readFileSync(pathToFile);
        var str = buf.toString();
        var arr = str.split("\n");
        var numberOfRecords = arr.length - 1;
        for(var i=0;i<numberOfRecords;i++)
        {
          var temp=arr[i].split(";");
          var userSchema = db.UserModel;
          userSchema.create({
            "email": temp[2],
            "firstname": temp[0],
            "lastname":temp[1]
          });
        }
        return res.json({success:true});

      }
};


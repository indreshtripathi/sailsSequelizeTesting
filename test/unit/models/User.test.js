describe.only('UsersModel', function() {

    describe('#create()', function() {

        it('should check create function', function (done) {
          var newUser = { firstname: "shubham", email: "shubhambhai@tecsol.com"};
            User.create(newUser)
                .then(function(results) {
                // some tests
                done();
            })
                .catch(done);
        });

    });

    describe('#find()', function() {
        it('should check find function', function (done) {
            User.find()
                .then(function(results) {
                // some tests
                done();
            })
                .catch(done);
        });

    });

    describe('#update()', function() {

        it('should check update function', function (done) {
            User.update()
                .then(function(results) {
                // some tests
                done();
            })
                .catch(done);
        });
    });


    describe('#destroy()', function() {


        it('should check destroy function', function (done) {
            User.destroy()
                .then(function(results) {
                // some tests
                done();
            })
                .catch(done);
        });

    });

});

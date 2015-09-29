    var request = require('supertest');

    describe('UsersController', function() {

      describe('#create()', function() {
        it('should check /create', function (done) {
          request(sails.hooks.http.app)
            .post('/users/create')
            .send({ firstname: 'shubham', lastname: 'bhai',email:"shubham@tecsol.com" })
            //.expect(302)
            //.expect('location','/mypage', done)
            ;
        });
      });

      describe('#find()', function() {
        it('should check /find', function (done) {
          request(sails.hooks.http.app)
            .get('/users/find')
            //.send({ firstname: 'shubham', lastname: 'bhai',email:"shubham@tecsol.com" })
            //.expect(302)
            //.expect('location','/mypage', done)
          ;
        });
      });

      describe('#update()', function() {
        it('should check  /update', function (done) {
          request(sails.hooks.http.app)
            .put('/users/update/1')
            .send({ firstname: 'farzi', lastname: 'Hr',email:"farzi@tecsol.com" })
            //.expect(302)
            //.expect('location','/mypage', done)
          ;
        });
      });

      describe('#destroy()', function() {
        it('should check  /destroy', function (done) {
          request(sails.hooks.http.app)
            .post('/users/destroy/14')
            //.send({ firstname: 'shubham', lastname: 'bhai',email:"shubham@tecsol.com" })
            //.expect(302)
            //.expect('location','/mypage', done)
          ;
        });
      });

    });

var express = require('express');
var router = express.Router();

// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/* GET home page. */
//router.get('/home', function(req, res, next) {
//res.render('index', { title: 'Express' });
//});

// ----------------------------------------------------

router.route('/employees')

  // create an actor (accessed at POST http://localhost:3000/api/actors)
    .post(function(req, res) {

      //

    })

  // get all the actors (accessed at GET http://localhost:3000/api/actors)
    .get(function(req, res) {

      req.getConnection(function(err, connection) {
        if (err) return next(err);

        connection.query('SELECT * FROM employees LIMIT 0,10', [], function(err, results) {
          if (err){
            return next(err);
          }

          res.json(results);

        });
      });

    });

module.exports = router;

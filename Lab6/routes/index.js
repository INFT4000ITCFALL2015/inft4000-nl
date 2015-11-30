var express = require('express');
var router = express.Router();
var employeeController = require('../controllers/employeeController');
// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');

    //allows cross-origin resource sharing
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next(); // make sure we go to the next routes and don't stop here
});


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

    // create an employee (accessed at POST http://localhost:3000/api/employees)
    //.post(employeeController.create)

    // get all the employees (accessed at GET http://localhost:3000/api/employees)index
    .get(employeeController.index)

    router.route('/employees/:emp_no')

// get the employee with that id (accessed at GET http://localhost:3000/api/employees/:emp_no)
    .get(employeeController.show)
    .put(employeeController.update)
    // delete the employee with this id (accessed at DELETE http://localhost:8080/api/employees/:emp_no)
   .delete(employeeController.destroy);

module.exports = router;
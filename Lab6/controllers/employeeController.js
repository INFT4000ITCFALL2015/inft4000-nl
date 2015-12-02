/**
 * Created by inet2005 on 11/26/15.
 */
module.exports.index = function(req, res) {

    console.log("Inside of the module - index method");
    req.getConnection(function(err, connection) {//getting the connection
        if (err) return next(err);

        var query = connection.query('SELECT * FROM employees ORDER BY emp_no DESC LIMIT 0,10', [], function(err, results) {
            if (err){
                return next(err);
            }

            res.json(results);

        });
        console.log(query.sql);
    });

};


module.exports.create = function(req, res) {

    console.log("In controller store method...");

    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function (err, connection) {

        var data = {
            first_name: input.first_name,
            last_name: input.last_name,
            birth_date: input.birth_date,
            hire_date: input.hire_date,
            gender: input.gender
        };

        var query = connection.query("INSERT INTO employees set ? ", data, function (err, rows) {

            if (err) {
                console.log("Error inserting : %s ", err);
            }
            else {
                res.json({message: 'Employee created!'});
            }

        });

        console.log(query.sql);
    });
};

module.exports.show = function(req, res) {//getting the connection
    console.log("Inside of the module - show method");
    req.getConnection(function(err, connection) {//getting the connection
        if (err) return next(err);

        var query = connection.query('SELECT * FROM employees WHERE emp_no = ? ', req.params.emp_no, function(err, results) {
            if (err){
                return next(err);
            }

            res.json(results);
        });
        console.log(query.sql);
    });

};

module.exports.update = function(req, res) {
    console.log("Inside of the module - update method");
    var input = JSON.parse(JSON.stringify(req.body));
    var emp_no = req.params.emp_no;

    req.getConnection(function (err, connection) {

        var data = {

            first_name    : input.first_name,
            last_name : input.last_name
        };


        var query = connection.query("UPDATE employees set ? WHERE emp_no = ? ",[data,emp_no], function(err, rows)
        {

            if (err) {
                console.log("Error Updating : %s ", err);
            }
            else{
                res.json({message: 'Employee updated!' });
            }

        });

        console.log(query.sql);

    });
};

module.exports.destroy = function(req, res) {
    var emp_no = req.params.emp_no;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM employees  WHERE emp_no = ? ",[emp_no], function(err, rows)
        {

            if (err) {
                console.log("Error Deleting : %s ", err);
            }
            else{
                res.json({message: 'Employee deleted!' });
            }

        });

        console.log(query.sql);

    });

};
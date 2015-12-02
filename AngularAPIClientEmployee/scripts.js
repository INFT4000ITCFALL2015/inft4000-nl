/**
 * Created by inet2005 on 11/26/15.
 */

(function(){

    var app = angular.module('myApp',['ngResource']);

    app.factory("Employee", function($resource) {
        return $resource("http://localhost:3000/api/employees/:emp_no",null,{
            'update': { method:'PUT' }
        });
    });

    app.controller('employeeController',function($scope,Employee){

        $scope.genders=[
            {value:"M"},
            {value:"F"}
        ];

        $scope.selection=[];

        $scope.toggleSelection = function toggleSelection(value) {
            var idx = $scope.selection.indexOf(value);

            // is currently selected
            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            }

            // is newly selected
            else {
                $scope.selection.push(value);
            }
        };
        Date.prototype.convertDateTimeToDate = function() {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
            var dd  = this.getDate().toString();
            if (mm.length < 2) mm = '0' + mm;
            if (dd.length < 2) dd = '0' + dd;
            return [yyyy, mm, dd].join('-');
        };



        // initialize display report to false
        $scope.displayReport = false;

        // retrieve all Employees from the API
        Employee.query(function(data) {
            $scope.employees = data;
        });

        $scope.refreshEmployees = function(){
            Employee.query(function(data) {
                $scope.employees = data;
            });
        };



        $scope.showEmployee = function(emp_no) {

            Employee.query({ emp_no: emp_no }, function(data) {
                $scope.selectedEmployee = data[0];
            });

            $scope.displayReport = true;
        };

        $scope.hideReport = function(){
            $scope.displayReport = false;
        };

        $scope.addEmployee = function(){

            var data = {
                first_name: $scope.newFirstName,
                last_name: $scope.newLastName,
                birth_date:$scope.newBirthDate.convertDateTimeToDate(),
                hire_date:$scope.newHireDate.convertDateTimeToDate(),
                gender: $scope.selection,
            };

            $scope.message = Employee.save(data);
        };

        $scope.deleteEmployee = function(emp_no){

            $scope.message = Employee.delete({ emp_no: emp_no });
        };

        $scope.updateEmployee = function(emp_no){

            var fName = document.getElementById('updateEmployeeFName' + emp_no).innerHTML;
            var lName = document.getElementById('updateEmployeeLName' + emp_no).innerHTML;

            var employee = Employee.query({emp_no: emp_no},function(data) {

                var data = {first_name: fName, last_name: lName};

                $scope.message = Employee.update({emp_no: emp_no},data);
            });
        };

    });

})();



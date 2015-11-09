var app = angular.module('myApp', []);
app.controller('StudentController', function($scope, $http) {
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchName   = '';     // set the default search/filter term

    $http.get("students.json").success(function(response) {
        $scope.students = response.records;
    });

    $scope.addNewStudent = function () {
        var student = {
            studentId: $scope.studentId,
            FirstName: $scope.fName,
            LastName: $scope.lName,
        };
        var newStudentId = $scope.studentId;
        var oldStudentId;
        if (newStudentId) {
            angular.forEach($scope.students, function (eachStudent) {
                if (newStudentId == eachStudent.studentId) {
                    alert("Sorry the Student Id already exists in the list.");
                    $scope.studentId ="";
                    oldStudentId = true;
                }
            });
            if (!oldStudentId) {
                $scope.students.push(student);
                //tempArray.push({studentId: newStudentId, FirstName:$scope.fName, LastName:$scope.lName});
                $scope.studentId ="";
                $scope.fName ="";
                $scope.lName ="";
            }//end if
        }//end if newStudentId
    };//addnewStudent function
});

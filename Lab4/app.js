angular.module('studentApp',[]).controller('StudentController', function($scope) {
    $scope.students = [];
    $scope.showReport= false;
    $scope.studentJSON = "";
    var tempArray = $scope.students;
    $scope.addNewStudent = function () {
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
                tempArray.push({studentId: newStudentId, FirstName:$scope.fName, LastName:$scope.lName});
                $scope.studentId ="";
                $scope.fName ="";
                $scope.lName ="";
            }//end if
        }//end if newStudentId
    };//addnewStudent function

    $scope.displayJSONReport = function () {
        //set the showReport to true
        $scope.showReport= true;
        //create a variable with the current json as string studentJSON
        $scope.studentJSON = JSON.stringify(tempArray);

    };//displayJSONReport function

    $scope.hideReport=function(){
        $scope.showReport= false;
    };
})//end of controller

        .directive("studentDetails", function() {
        return {
           restrict: 'E',
            templateUrl: "student-details.html"
        };
});// end of directive code


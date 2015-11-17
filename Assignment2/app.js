var app = angular.module('myApp', []);

app.controller('StudentController', function($scope, $http) {
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchName   = '';     // set the default search/filter term
    $scope.myStyle= {
        "position": "absolute",
        "right": "150px",
        "top": "450px",
        "z-index": "-1",
        "width": "600px",
        "height": "400px",
        "border": "15px groove #8AC007"
    }

    $scope.showReport= false;
    $scope.studentJSON = "";

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

    $scope.displayJSONReport = function () {
        //set the showReport to true
        $scope.showReport= true;
        //create a variable with the current json as string studentJSON
        $scope.studentJSON = JSON.stringify($scope.students);

    };//displayJSONReport function

    $scope.hideReport=function(){
        $scope.showReport= false;
    };

    $scope.removeRow = function(studentId){
        var index = -1;
        var comArr = eval( $scope.students );
        for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].studentId === studentId ) {
                index = i;
                break;
            }
        }
        if( index === -1 ) {
            alert( "Something gone wrong" );
        }
        $scope.students.splice( index, 1 );
    };

});


app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.directive('numbersOnly', [
    function(){ // limit the input field to numbers only, but retain value as string
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {

                modelCtrl.$parsers.push(function (inputValue) {

                    var transformedInput = inputValue;
                    transformedInput = transformedInput.replace(/\D/g,'');

                    if(transformedInput)
                        transformedInput = parseInt(transformedInput)+"";

                    if (transformedInput!=inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    }
])

    .directive("studentDetails", function() {
        return {
            restrict: 'E',
            templateUrl: "student-details.html"
        };
    });// end of directive code

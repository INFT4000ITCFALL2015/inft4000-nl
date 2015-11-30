/**
 * Created by inet2005 on 11/26/15.
 */
angular.module('myApp',[]).controller('employeeController',function($scope,$http){
    //$scope.actors = [
    //    {actor_id: 1, first_name: 'Mike', last_name: 'Crocker'},
    //    {actor_id: 2, first_name: 'Sally', last_name: 'Parker'}
    //];

    $http.get('http://localhost:3000/api/employees').success(function(response) {
        $scope.employees =  response;
    });

});

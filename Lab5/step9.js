var http = require( 'http' );
var bl = require( 'bl' );
var ret = [];
var count = 0;

for ( var i = 2; i < 5; i++ ) {
    http.get(process.argv[i],function() {//function defined in the closure remembers the environment in which it was created.
        var my_i = i;//save and use the current value of i inside the closure.
        return function(response) {
            response.pipe(bl(function(err, data) {
                if (err)
                    return console.error( "Error: " + err );
                ret[my_i-2] = data.toString();
                count++;
                //printing the response as got in order from the server
                if ( count == 3 ) {
                    for (var j = 0; j < 3; j++ )
                        console.log( ret[j] );
                }
            }));
        };//end closure
    }());
}
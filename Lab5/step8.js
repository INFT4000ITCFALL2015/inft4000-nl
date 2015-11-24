var http = require('http');
var bl = require('bl');// collect buffers and access with a standard readable Buffer interface,

http.get(process.argv[2], function(response){

    response.pipe(bl(function(err, data){
                if ( err ) return console.error( "Error: " + err );
                data = data.toString();
                console.log( data.length );
                console.log( data );
            }
        )
    );
} );
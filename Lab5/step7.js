var http = require( 'http' );

http.get( process.argv[ 2 ], function( response ) {
    response.setEncoding( 'utf8' );//get data events emit as Strings instead of the standard Node Buffer objects
    response.on( 'data', console.log )
            .on( 'error', console.error );//The “.on( <event name>, <listener/callback> )” method returns the emitter (response from the server)
} );
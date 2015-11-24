var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response) {
    if (request.method != 'POST')//if the request is a POST request
        return response.end( 'Only POST requests are accepted' );

    request.pipe(map(function(chunk) {//Pipe the data from the request stream to the transform stream.
            return chunk.toString().toUpperCase();
        } ) )
        .pipe(response);//Pipe the data from the transform stream to the response stream.
} );
server.listen(Number(process.argv[2]));
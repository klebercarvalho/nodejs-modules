var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World\n');
    response.write(module1.myVariable);
    module1.myFunction();
    response.write(module2.myVariable);
    module1.myFunction();
    response.end();

}

http.createServer(onRequest).listen(3000);

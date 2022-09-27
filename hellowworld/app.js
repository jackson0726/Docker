const http = require('http');
const os = require('os');
const port = 8080;

console.log("Node server starting...");
console.log("Local host is " + os.hostname());
console.log("Listening on port " + port);

http.createServer(function (req, res) {
    let client = req.connection.remoteAddress;
    console.log("Received request for " + req.url + " from " + client);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("This is " + os.hostname());
  res.write("Your IP is " + client);
  res.end("\n");
}).listen(8080);
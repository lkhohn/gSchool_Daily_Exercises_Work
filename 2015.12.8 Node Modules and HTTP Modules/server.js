var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  //here you would check what the url is and do diffeent things
  if (req.url === '/about.html') {
    fs.readFile('./about.html', function(err, data) {
      res.write(data.toString());
      res.end();
    });

  } else if (req.url === '/faq.html') {
    fs.readFile('./faq.html', function(err, data) {
      res.write(data.toString());
      res.end();
    });

  } else if (req.url === '/index.html') {
    fs.readFile('./index.html', function(err, data) {
      res.write(data.toString());
      res.end();
    });

  } else {
    res.end('404, no such route');
  }
}

var server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("I'm listening on port 8000...")
});

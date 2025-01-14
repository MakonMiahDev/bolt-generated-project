const http = require('http');
    const fs = require('fs');

    http.createServer((req, res) => {
      if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end("Error: File not found");
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          }
        });
      } else {
        fs.readFile('.' + req.url, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end("Error: File not found");
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          }
        });
      }
    }).listen(3000);

    console.log('Server running on port 3000');

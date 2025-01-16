// Create web server
// Create a web server that listens for requests on port 3000, and responds with the contents of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
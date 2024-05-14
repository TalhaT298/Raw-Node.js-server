// Import the 'http' module
const http = require('http');

// Define the host and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response
  res.end('Hello, World Talha!\n');
});

// Start listening on the specified port and host
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Importing required modules
const http = require('http');
const url = require('url');
const qs = require('querystring');

// Function to handle GET requests
const handleGetRequest = (req, res) => {
  // Extracting URL path
  const path = url.parse(req.url).pathname;

  // Routing for GET requests
  if (path === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, this is a GET request!');
  } else if (path === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the about page.');
  } else if (path === '/home') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the home page.');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
};

// Function to handle POST requests
const handlePostRequest = (req, res) => {
  // Extracting URL path
  const path = url.parse(req.url).pathname;

  // Routing for POST requests
  if (path === '/submit') {
    let body = '';
    
    // Handling data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Handling the end of the request
    req.on('end', () => {
      const postData = qs.parse(body);

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`Received POST data: ${JSON.stringify(postData)}`);
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
};

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Handling different HTTP methods
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Method Not Allowed');
  }
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

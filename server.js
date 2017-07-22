const http = require('http');
const ping = require('./ping');
const pong = require('./pong');

const server = new http.Server();

server.on('request', (req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    console.log('Request: GET /ping');
    ping(res);
  } else if (req.method === 'POST' && req.url === '/pong') {
    console.log('Request: POST /pong');
    pong(req, res);
  } else {
    console.log(`Undefined request: ${req.method} ${req.url}`);
    res.stausCode = 404;
    res.end('404: Not found');
  }
});


module.exports = {
  listen(port = 3000) {
    server.listen(port, '127.0.0.1');
    console.log(`Server listening on port: ${port}`);
  },
};

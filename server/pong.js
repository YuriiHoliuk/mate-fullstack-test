const qs = require('querystring');

function pong(req, res) {
  let body = '';

  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    body = qs.parse(body);
    const time = parseInt(body.time, 10);

    const now = new Date();
    const sent = new Date(time);
    const ping = now.getMilliseconds() - sent.getMilliseconds();

    console.log(`One-way(client - server) ping: ${ping}ms`);

    res.statusCode = 200;
    res.end('ping');
  });
}

module.exports = pong;

function ping(res) {
  res.statusCode = 200;
  res.end('pong');
}

module.exports = ping;

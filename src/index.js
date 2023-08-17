const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(`./db.json`);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(router);
server.use(middlewares);

server.listen(port, () => {
  console.log('JSON Server is running');
});
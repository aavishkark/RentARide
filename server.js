const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://your-netlify-app.netlify.app');
    // ...
    next();
  });
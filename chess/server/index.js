import app from './app';
const server = require('http').createServer(app);
require('./socketIo').default(server);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Game listening on port ${PORT}!`);
});

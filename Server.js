if(process.env.NODE_ENV = 'production'){
  require('dotenv').config();
}


const http = require('http');
const app = require('./src/app');
const PORT = process.env.APP_PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
})

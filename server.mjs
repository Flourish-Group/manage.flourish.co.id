// server.mjs
import http from 'http';

/* * 
 * * Routing for API  
 * */ 
import apiRoutes from './routes/api/userRoutes.mjs';

/* * 
 * * Routing for Apps  
 * */ 
import userRoutes from './routes/userRoutes.mjs';

const server = http.createServer((req, res) => {
  userRoutes(req, res);
  apiRoutes(req, res);
  
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

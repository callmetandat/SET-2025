import { createServer } from 'node:http';
import { HOSTNAME, PORT } from './config/constants.mjs';
import { routeRequest } from './router/routes.mjs';

const server = createServer((request, response) => {
  const parsedUrl = new URL(request.url, `http://${HOSTNAME}:${PORT}/`);
  routeRequest(request, response, parsedUrl);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
import { createServer } from 'node:http';
import { calculateSum } from './APIs/calculateSum.mjs'
import { countAPI } from './APIs/countAPI.mjs'
import { sendJSON } from './APIs/ultilities.mjs';
import { getCurrrentTime } from './APIs/getCurrentTime.mjs';
import { getHistory } from './APIs/logHistory.mjs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${hostname}:${port}/`);

  if (req.method === 'POST' && parsedUrl.pathname === '/api/sum') {
    calculateSum(req, res);
  } else if (req.method === 'GET' && parsedUrl.pathname === '/api/count') {
    countAPI(req, res);
  } else if (req.method === 'GET' && parsedUrl.pathname === '/api/current-time') {
    getCurrrentTime(req, res);
  } else if  (req.method === 'GET' && parsedUrl.pathname === '/api/history') {
    getHistory(req, res);
  } 
  else { 
    sendJSON(res, 404, { error: 'Route not found'});
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
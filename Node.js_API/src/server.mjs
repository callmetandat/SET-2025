import { createServer } from 'node:http';
import { sendJSON } from './utils/index.mjs';
import { HTTP_METHODS, ROUTES, STATUS_CODES, HOSTNAME, PORT, CONTENT_TYPES, ERROR_MESSAGES } from './config/constants.mjs';
import { calculateSum } from './apis/calculateSum.mjs'
import { countAPI } from './apis/countAPI.mjs'
import { getCurrrentTime } from './apis/getCurrentTime.mjs';
import { getHistory } from './apis/logHistory.mjs';


const server = createServer((request, response) => {
  const parsedUrl = new URL(request.url, `http://${HOSTNAME}:${PORT}/`);

  if (request.method === HTTP_METHODS.POST && parsedUrl.pathname === ROUTES.SUM) {
    calculateSum(request, response);
  } else if (request.method === HTTP_METHODS.GET && parsedUrl.pathname === ROUTES.COUNT) {
    countAPI(request, response);
  } else if (request.method === HTTP_METHODS.GET && parsedUrl.pathname === ROUTES.CURRENT_TIME) {
    getCurrrentTime(request, response);
  } else if  (request.method === HTTP_METHODS.GET && parsedUrl.pathname === ROUTES.HISTORY) {
    getHistory(request, response);
  } 
  else { 
    sendJSON(response, STATUS_CODES.NOT_FOUND, CONTENT_TYPES.JSON, { error: ERROR_MESSAGES.ROUTE_NOT_FOUND});
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
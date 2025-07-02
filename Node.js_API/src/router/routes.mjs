import { sendJSON } from '../utils/index.mjs';
import { 
    HTTP_METHODS, 
    ROUTES, 
    STATUS_CODES, 
    CONTENT_TYPES, 
    ERROR_MESSAGES 
} from '../config/constants.mjs';

import { calculateSum } from '../controller/calculateSum.mjs'
import { countAPI } from '../controller/countAPI.mjs'
import { getCurrrentTime } from '../controller/getCurrentTime.mjs';
import { getHistory } from '../controller/logHistory.mjs';

export function routeRequest(request, response, parsedUrl) {
    const method = request.method;
    const pathname = parsedUrl.pathname;
    if (method === HTTP_METHODS.POST && pathname === ROUTES.SUM) {
        calculateSum(request, response);
    } else if (method === HTTP_METHODS.GET && pathname === ROUTES.COUNT) {
        countAPI(request, response);
    } else if (method === HTTP_METHODS.GET && pathname === ROUTES.CURRENT_TIME) {
        getCurrrentTime(request, response);
    } else if  (method === HTTP_METHODS.GET && pathname === ROUTES.HISTORY) {
        getHistory(request, response);
    } 
    else { 
        sendJSON(response, STATUS_CODES.NOT_FOUND, CONTENT_TYPES.JSON, { error: ERROR_MESSAGES.ROUTE_NOT_FOUND});
    }
}
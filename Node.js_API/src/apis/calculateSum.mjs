import { STATUS_CODES, CONTENT_TYPES, ERROR_MESSAGES } from "../config/constants.mjs";
import { sendJSON, parseJSON } from "../utils/index.mjs";
import { incrementCount } from "./counters.mjs";
import { logHistory } from "./logHistory.mjs";


export function calculateSum(request, response) {
    let body = '';

    incrementCount();

    request.on('data', chunk => {
        body += chunk;
    });
    request.on('end', () => {
        const parsedData = parseJSON(body);

        const number1 = parsedData.number1;
        const number2 = parsedData.number2;

        if(isNaN(number1) || isNaN(number2)) {
            sendJSON(response, STATUS_CODES.BAD_REQUEST, CONTENT_TYPES.JSON, { error: ERROR_MESSAGES.INVALID_JSON });
            return;
        }

        const sum = number1 + number2;
        logHistory('/sum', { number1: number1, number2: number2}, { sum: sum });
        sendJSON(response, STATUS_CODES.OK, CONTENT_TYPES.JSON, { sum: sum });
    });
}
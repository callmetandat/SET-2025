import { sendJSON } from "./ultilities.mjs";
import { incrementCount } from "./counters.mjs";
import { logHistory } from "./logHistory.mjs";

export function calculateSum(req, res) {
    let body = '';

    incrementCount();

    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        const parsedData = JSON.parse(body);

        const num1 = parsedData.num1;
        const num2 = parsedData.num2;

        if(isNaN(num1) || isNaN(num2)) {
            sendJSON(res, 400, { error: 'Invalid input' });
            return;
        }

        const sum = num1 + num2;
        logHistory('/sum', { num1: num1, num2: num2}, { sum: sum });
        sendJSON(res, 200, { sum: sum });
    });
}
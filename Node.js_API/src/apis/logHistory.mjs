import { sendJSON, writeJSON, readJSON } from "../utils/index.mjs";
import { STATUS_CODES, CONTENT_TYPES, ERROR_MESSAGES } from "../config/constants.mjs";

const historyPath = "./data/history.json";

export async function logHistory(endpoint, input, output) {
    try{
        let historyObject = {};
        try {
            historyObject = await readJSON(historyPath);
            if (!Array.isArray(historyObject.history)) {
                historyObject.history = [];
            } 
        } catch (error) {
            historyObject.history = [];
        }

        const newLog = {
            endpoint,
            input,
            output
        };

        historyObject.history.unshift(newLog);

        await writeJSON(historyPath, historyObject);
    } catch (error) {
        console.log(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error)
    }
}

export async function getHistory(request, response) {
    try {
        let historyObject = await readJSON(historyPath);
        if (!Array.isArray(historyObject.history)) {
            historyObject.history = [];
        }
        sendJSON(response, STATUS_CODES.OK, CONTENT_TYPES.JSON, { history: historyObject.history });
    } catch (error) {
        sendJSON(response, STATUS_CODES.INTERNAL_SERVER_ERROR, CONTENT_TYPES.JSON, { error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR});
    }
}
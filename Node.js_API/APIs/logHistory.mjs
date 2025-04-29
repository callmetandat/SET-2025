import { sendJSON, writeJSON, readJSON } from "./ultilities.mjs";

const historyPath = './data/history.json';

export async function logHistory(endpoint, input, output) {
    try{
        let historyObj = {};
        try {
            historyObj = await readJSON(historyPath);
            if (!Array.isArray(historyObj.history)) {
                historyObj.history = [];
            } 
        } catch (error) {
            historyObj.history = [];
        }

        const newLog = {
            endpoint,
            input,
            output
        };

        historyObj.history.unshift(newLog);

        await writeJSON(historyPath, historyObj);
    } catch (error) {
        console.log('Failed to log history:', error)
    }
}

export async function getHistory(req, res) {
    try {
        let historyObj = await readJSON(historyPath);
        if (!Array.isArray(historyObj.history)) {
            historyObj.history = [];
        }
        sendJSON(res, 200, { history: historyObj.history });
    } catch (error) {
        sendJSON(res, 500, { error: 'Failed to load history '});
    }
}
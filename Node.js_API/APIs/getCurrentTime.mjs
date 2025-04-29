import { logHistory } from "./logHistory.mjs";
import { sendJSON } from "./ultilities.mjs";

export async function getCurrrentTime(req, res) {
    const timeStamp = Date.now();
    const utcDate = new Date(timeStamp).toISOString();
    await logHistory('/current-time', '', { currentTime: utcDate });
    sendJSON(res, 200, { currentTime: utcDate });
}
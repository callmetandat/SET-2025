import { STATUS_CODES, CONTENT_TYPES } from "../config/constants.mjs";
import { logHistory } from "./logHistory.mjs";
import { sendJSON } from "../utils/index.mjs";

export async function getCurrrentTime(request, response) {
    const timeStamp = Date.now();
    const utcDate = new Date(timeStamp).toISOString();
    await logHistory('/current-time', '', { currentTime: utcDate });
    sendJSON(response, STATUS_CODES.OK, CONTENT_TYPES.JSON, { currentTime: utcDate });
}
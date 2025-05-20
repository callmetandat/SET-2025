import { STATUS_CODES, CONTENT_TYPES } from "../config/constants.mjs";
import { getCount } from "./counters.mjs";
import { logHistory } from "./logHistory.mjs";
import { sendJSON } from "../utils/index.mjs";

export async function countAPI(request, response) {
    const count = await getCount();
    logHistory('/count','',{ totalCalls: count.totalCalls });
    sendJSON(response, STATUS_CODES.OK, CONTENT_TYPES.JSON, { totalCalls: count.totalCalls } );
}
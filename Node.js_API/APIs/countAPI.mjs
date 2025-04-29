import { getCount } from "./counters.mjs";
import { logHistory } from "./logHistory.mjs";
import { sendJSON } from "./ultilities.mjs";

export async function countAPI(req, res) {
    const count = await getCount();
    logHistory('/count','',{ totalCalls: count.totalCalls });
    sendJSON(res, 200, { totalCalls: count.totalCalls } );
}
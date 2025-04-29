import { readJSON, writeJSON } from "./ultilities.mjs";

let count = 0;

const counterPath = './data/count.json';

export async function incrementCount() {
    let totalCallsObj = await getCount();
    let totalCalls = totalCallsObj.totalCalls || 0;
    totalCalls += 1;
    await writeJSON(counterPath, { totalCalls: totalCalls });
}

export async function getCount() {
    const count = await readJSON(counterPath);
    return count;
}

export function resetCount() {
    count = 0;
}
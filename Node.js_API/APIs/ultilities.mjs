import { writeFile, readFile } from 'fs/promises';

export function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

export async function writeJSON(path, data) {
    try {
        await writeFile(path, JSON.stringify(data, null, 2));
        console.log('Write JSON file success!');
    } catch (error) {
        console.error('Write JSON file failed', error);
        throw error;
    }
}

export async function readJSON(path) {
    try {
        const data = await readFile(path, 'utf-8'); 
        console.log(data);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        throw error; 
    }
}
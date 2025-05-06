import { writeFile, readFile } from 'fs/promises';
import { ERROR_MESSAGES } from '../config/constants.mjs';

export function sendJSON(response, statusCode, contentType, data) {
    response.writeHead(statusCode, { 'Content-Type': contentType });
    response.end(JSON.stringify(data));
}

export function parseJSON(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error(ERROR_MESSAGES.INVALID_JSON, error);
        throw error;
    }
}

export async function writeJSON(path, data) {
    try {
        await writeFile(path, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(ERROR_MESSAGES.FILE_WRITE_ERROR, error);
        throw error;
    }
}

export async function readJSON(path) {
    try {
        const data = await readFile(path, 'utf-8'); 
        return JSON.parse(data);
    } catch (error) {
        console.error(ERROR_MESSAGES.FILE_READ_ERROR, error);
        throw error; 
    }
}
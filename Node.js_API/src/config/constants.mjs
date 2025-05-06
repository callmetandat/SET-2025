export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};

export const ROUTES = {
    SUM: '/api/sum',
    COUNT: '/api/count',
    CURRENT_TIME: '/api/current-time',
    HISTORY: '/api/history',
};

export const STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

export const CONTENT_TYPES = {
    JSON: 'application/json',
    TEXT: 'text/plain',
    HTML: 'text/html',
  };

export const ERROR_MESSAGES = {
    ROUTE_NOT_FOUND: 'Route not found',
    INVALID_JSON: 'Invalid JSON format',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    BAD_REQUEST: 'Bad Request',
    FILE_READ_ERROR: 'Error reading file',
    FILE_WRITE_ERROR: 'Error writing file',
};

export const HOSTNAME = '127.0.0.1';
export const PORT = 3000;

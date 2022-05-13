class ErrorApi extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ErrorApi(404, message);
    }

    static forbidden(message) {
        return new ErrorApi(403, message);
    }

    static conflict(message) {
        return new ErrorApi(409, message);
    }
}

module.exports = ErrorApi;
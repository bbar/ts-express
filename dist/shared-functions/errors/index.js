"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertErrorToString(error) {
    if (!error)
        return 'An unknown error occured.';
    if (error.message)
        return error.message;
    try {
        return error.toString();
    }
    catch (e) {
        return 'An unknown error occured.';
    }
}
exports.convertErrorToString = convertErrorToString;
//# sourceMappingURL=index.js.map
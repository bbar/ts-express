"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
function ISO8601ASC(a, b) {
    return moment_1.default(a).valueOf() - moment_1.default(b).valueOf();
}
exports.ISO8601ASC = ISO8601ASC;
function ISO8601DESC(a, b) {
    return moment_1.default(b).valueOf() - moment_1.default(a).valueOf();
}
exports.ISO8601DESC = ISO8601DESC;
function numberASC(a, b) {
    return Number(a) - Number(b);
}
exports.numberASC = numberASC;
function numberDESC(a, b) {
    return Number(b) - Number(a);
}
exports.numberDESC = numberDESC;
//# sourceMappingURL=index.js.map
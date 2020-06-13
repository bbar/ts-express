"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 4000;
// Parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Parse application/json
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.get('/', (req, res) => {
    const response = {
        error: null,
        data: 'heyy',
    };
    res.json(response);
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
// [SIGINT] The app is going down. Kill what you need to.
process.on('SIGINT', () => {
    try {
        console.log('SIGINT event received.');
        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
//# sourceMappingURL=app.js.map
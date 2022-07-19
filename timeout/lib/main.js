"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
function timeout(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.timeout = timeout;

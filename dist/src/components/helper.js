"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return Helper;
}());
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map
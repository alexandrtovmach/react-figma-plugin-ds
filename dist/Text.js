"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Text = function (_a) {
    var className = _a.className, children = _a.children, size = _a.size, weight = _a.weight;
    className = className || "";
    var sizeClass = size && "type--" + size;
    var weightClass = weight && "type--" + weight;
    return (react_1.default.createElement("p", { className: "type " + sizeClass + " " + weightClass + " " + className }, children));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Title = function (_a) {
    var className = _a.className, children = _a.children, level = _a.level, size = _a.size, weight = _a.weight;
    className = className || "";
    level = level || "h1";
    var sizeClass = size && "type--" + size;
    var weightClass = weight && "type--" + weight;
    var headerClassName = "section-title " + sizeClass + " " + weightClass + " " + className;
    switch (level) {
        case "h1":
            return react_1.default.createElement("h1", { className: headerClassName }, children);
        case "h2":
            return react_1.default.createElement("h2", { className: headerClassName }, children);
        case "h3":
            return react_1.default.createElement("h3", { className: headerClassName }, children);
        case "h4":
            return react_1.default.createElement("h4", { className: headerClassName }, children);
        case "h5":
            return react_1.default.createElement("h5", { className: headerClassName }, children);
        case "h6":
            return react_1.default.createElement("h6", { className: headerClassName }, children);
        default:
            return react_1.default.createElement("h1", { className: headerClassName }, children);
    }
};
exports.default = Title;
//# sourceMappingURL=Title.js.map
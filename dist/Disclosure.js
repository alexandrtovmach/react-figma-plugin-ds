"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Disclosure = function (_a) {
    var isDefaultExpanded = _a.isDefaultExpanded, className = _a.className, label = _a.label, children = _a.children, isSection = _a.isSection, onExpand = _a.onExpand;
    var _b = react_1.useState(Boolean(isDefaultExpanded)), isExpanded = _b[0], onExpandedStateChange = _b[1];
    var toggleExapndState = function () {
        onExpand && onExpand(!isExpanded);
        onExpandedStateChange(!isExpanded);
    };
    var labelClass = isSection ? "disclosure--section" : "";
    var expandClass = isExpanded ? "disclosure--expanded" : "";
    return (react_1.default.createElement("div", { className: "disclosure " + (className || "") },
        react_1.default.createElement("div", { className: "disclosure__item " + expandClass },
            react_1.default.createElement("div", { className: "disclosure__label " + labelClass, onClick: toggleExapndState }, label),
            react_1.default.createElement("div", { className: "disclosure__content" }, children))));
};
exports.default = Disclosure;
//# sourceMappingURL=Disclosure.js.map
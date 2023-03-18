"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
var Text = function (_a) {
    var className = _a.className, children = _a.children, iconName = _a.iconName, iconText = _a.iconText, iconColor = _a.iconColor;
    className = className || "";
    return (react_1.default.createElement("div", { className: "onboarding-tip " + className },
        iconName && (react_1.default.createElement("div", { className: "onboarding-tip__icon" },
            react_1.default.createElement(_1.Icon, { name: iconName, color: iconColor, text: iconText }))),
        react_1.default.createElement("div", { className: "type onboarding-tip__msg" }, children)));
};
exports.default = Text;
//# sourceMappingURL=Tip.js.map
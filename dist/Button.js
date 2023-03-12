"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children, className = _a.className, isSecondary = _a.isSecondary, isTertiary = _a.isTertiary, isDisabled = _a.isDisabled, onClick = _a.onClick, isDestructive = _a.isDestructive, htmlButtonProps = __rest(_a, ["children", "className", "isSecondary", "isTertiary", "isDisabled", "onClick", "isDestructive"]);
    className = className || "";
    var level = isTertiary ? "tertiary" : isSecondary ? "secondary" : "primary";
    var modificator = isDestructive ? "-destructive" : "";
    if (isSecondary && isTertiary) {
        console.warn("Use only one level modificator \"isSecondary\" or \"isTertiary\"");
    }
    return (react_1.default.createElement("button", __assign({}, htmlButtonProps, { onClick: onClick, className: "button button--" + level + modificator + " " + className, disabled: isDisabled }), children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map
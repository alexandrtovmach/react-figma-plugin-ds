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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon = function (_a) {
    var className = _a.className, name = _a.name, color = _a.color, text = _a.text, isSelected = _a.isSelected, isDisabled = _a.isDisabled, onClick = _a.onClick, iconComponent = _a.iconComponent, iconButtonProps = _a.iconButtonProps;
    className = className || "";
    var iconClass = text ? "" : "icon--" + name;
    var colorClass = !isDisabled && color ? "icon--" + color : "icon--black-3";
    var selectedClass = isSelected ? "icon-button--selected" : "";
    if (onClick) {
        return (react_1.default.createElement("button", __assign({}, iconButtonProps, { style: {
                padding: 0,
                cursor: "default",
            }, disabled: isDisabled, onClick: onClick, className: "icon-button " + selectedClass + " " + className }),
            react_1.default.createElement("div", { className: "icon " + (!iconComponent && iconClass) },
                iconComponent,
                text)));
    }
    else {
        return (react_1.default.createElement("div", { className: "icon " + (!iconComponent && iconClass) + " " + colorClass + " " + className },
            iconComponent,
            text));
    }
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map
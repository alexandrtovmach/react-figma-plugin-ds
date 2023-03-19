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
var _1 = require("./");
var InputComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, type = _a.type, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, htmlInputProps = __rest(_a, ["className", "type", "defaultValue", "placeholder", "isDisabled", "onChange"]);
    return (react_1.default.createElement("input", __assign({}, htmlInputProps, { type: type, className: className, placeholder: placeholder, defaultValue: defaultValue, disabled: isDisabled, onChange: function (event) { return onChange && onChange(event.target.value, event); } })));
};
var Input = function (_a) {
    var className = _a.className, type = _a.type, icon = _a.icon, _b = _a.iconColor, iconColor = _b === void 0 ? "black3" : _b, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, children = _a.children, iconComponent = _a.iconComponent, htmlInputProps = __rest(_a, ["className", "type", "icon", "iconColor", "defaultValue", "placeholder", "isDisabled", "onChange", "children", "iconComponent"]);
    className = className || "";
    type = type || "text";
    var inputClass = "input__field";
    if (icon) {
        return (react_1.default.createElement("div", { className: "input input--with-icon" },
            react_1.default.createElement(_1.Icon, { name: icon, color: iconColor, isDisabled: isDisabled, iconComponent: iconComponent }),
            react_1.default.createElement(InputComponent, __assign({}, htmlInputProps, { className: inputClass + " " + className, type: type, defaultValue: defaultValue, placeholder: placeholder, isDisabled: isDisabled, onChange: onChange })),
            children));
    }
    else {
        return (react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement(InputComponent, __assign({}, htmlInputProps, { className: inputClass + " " + className, type: type, defaultValue: defaultValue, placeholder: placeholder, isDisabled: isDisabled, onChange: onChange })),
            children));
    }
};
exports.default = Input;
//# sourceMappingURL=Input.js.map
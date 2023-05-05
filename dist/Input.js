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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var _1 = require("./");
var InputComponent = react_1.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, type = _a.type, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, htmlInputProps = __rest(_a, ["className", "type", "defaultValue", "placeholder", "isDisabled", "onChange"]);
    return (react_1.default.createElement("input", __assign({}, htmlInputProps, { ref: ref, type: type, className: className, placeholder: placeholder, defaultValue: defaultValue, disabled: isDisabled, onChange: function (event) { return onChange && onChange(event.target.value, event); } })));
});
var Input = react_1.forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, icon = _a.icon, iconComponent = _a.iconComponent, _b = _a.iconColor, iconColor = _b === void 0 ? "black3" : _b, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, children = _a.children, htmlInputProps = __rest(_a, ["className", "type", "icon", "iconComponent", "iconColor", "defaultValue", "placeholder", "isDisabled", "onChange", "children"]);
    className = className || "";
    type = type || "text";
    var inputClass = "input__field";
    if (icon) {
        return (react_1.default.createElement("div", { className: "input input--with-icon" },
            react_1.default.createElement(_1.Icon, { name: icon, iconComponent: iconComponent, color: iconColor, isDisabled: isDisabled }),
            react_1.default.createElement(InputComponent, __assign({}, htmlInputProps, { ref: ref, className: inputClass + " " + className, type: type, defaultValue: defaultValue, placeholder: placeholder, isDisabled: isDisabled, onChange: onChange })),
            children));
    }
    else {
        return (react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement(InputComponent, __assign({}, htmlInputProps, { ref: ref, className: inputClass + " " + className, type: type, defaultValue: defaultValue, placeholder: placeholder, isDisabled: isDisabled, onChange: onChange })),
            children));
    }
});
exports.default = Input;
//# sourceMappingURL=Input.js.map
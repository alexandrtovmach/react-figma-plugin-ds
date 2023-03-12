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
var Textarea = function (_a) {
    var className = _a.className, _b = _a.rows, rows = _b === void 0 ? 2 : _b, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, htmlTextAreaProps = __rest(_a, ["className", "rows", "defaultValue", "placeholder", "isDisabled", "onChange"]);
    className = className || "";
    return (react_1.default.createElement("textarea", __assign({}, htmlTextAreaProps, { rows: rows, className: "textarea " + className, placeholder: placeholder, defaultValue: defaultValue, disabled: isDisabled, onChange: function (event) { return onChange && onChange(event.target.value, event); } })));
};
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map
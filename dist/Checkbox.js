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
var Checkbox = function (_a) {
    var id = _a.id, className = _a.className, type = _a.type, isDisabled = _a.isDisabled, label = _a.label, name = _a.name, defaultValue = _a.defaultValue, onChange = _a.onChange, initialHtmlInputProps = _a.initialHtmlInputProps;
    className = className || "";
    type = type || "checkbox";
    var inputConfig = __assign(__assign({}, initialHtmlInputProps), { id: id || type + "--" + (Math.random() * 100000000).toFixed(0) });
    switch (type) {
        case "switch":
            inputConfig = __assign(__assign({}, inputConfig), { className: "switch__toggle", type: "checkbox" });
            break;
        case "radio":
            inputConfig = __assign(__assign({}, inputConfig), { className: "radio__button", type: "radio", name: name });
            break;
        default:
            inputConfig = __assign(__assign({}, inputConfig), { className: "checkbox__box", type: "checkbox" });
            break;
    }
    var labelClass = type + "__label";
    return (react_1.default.createElement("div", { className: type + " " + className },
        react_1.default.createElement("input", __assign({}, inputConfig, { defaultChecked: defaultValue, onChange: function (event) { return onChange && onChange(event.target.checked, event); }, disabled: isDisabled })),
        react_1.default.createElement("label", { className: labelClass, htmlFor: inputConfig.id }, label)));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_outside_click_handler_1 = __importDefault(require("react-outside-click-handler"));
var Select = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, options = _a.options, placeholder = _a.placeholder, isDisabled = _a.isDisabled, defaultValue = _a.defaultValue, onExpand = _a.onExpand, onChange = _a.onChange, unExpandedButtonProps = _a.unExpandedButtonProps;
    var _c = react_1.useState(false), isExpanded = _c[0], onExpandedStateChange = _c[1];
    var _d = react_1.useState(options.find(function (_a) {
        var value = _a.value;
        return defaultValue === value;
    })), selectedOption = _d[0], onSelectOption = _d[1];
    react_1.useEffect(function () {
        onExpand && onExpand(isExpanded);
    }, [isExpanded]);
    react_1.useEffect(function () {
        onChange && selectedOption && onChange(selectedOption);
    }, [selectedOption]);
    react_1.useEffect(function () {
        var newSelectedOption = options.find(function (_a) {
            var value = _a.value;
            return defaultValue === value;
        });
        onSelectOption(newSelectedOption);
    }, [defaultValue]);
    var handleExpandClick = function () { return onExpandedStateChange(!isExpanded); };
    var handleOutsideClick = function () { return onExpandedStateChange(false); };
    var handleSelectClick = function (value) {
        var newOption = options.find(function (_a) {
            var v = _a.value;
            return v === value;
        });
        onExpandedStateChange(false);
        onSelectOption(newOption);
    };
    var expandButtonClass = isExpanded ? "select-menu__button--active" : "";
    var expanListClass = isExpanded ? "select-menu__menu--active" : "";
    var disabledColorClass = isDisabled ? "icon--black-3" : "";
    return (react_1.default.createElement(react_outside_click_handler_1.default, { onOutsideClick: handleOutsideClick, disabled: !isExpanded },
        react_1.default.createElement("div", { className: "select-menu " + className },
            react_1.default.createElement("button", __assign({}, unExpandedButtonProps, { className: "select-menu__button " + expandButtonClass + " " + disabledColorClass, onClick: handleExpandClick, disabled: isDisabled, title: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.title, type: "button" }),
                react_1.default.createElement("span", { className: "select-menu__label" }, (selectedOption && selectedOption.label) || placeholder),
                react_1.default.createElement("span", { className: "select-menu__caret" })),
            react_1.default.createElement("ul", { className: "select-menu__menu " + expanListClass + " " + disabledColorClass, style: { top: "-24px" } }, options &&
                options.map(function (_a, i) {
                    var value = _a.value, label = _a.label, divider = _a.divider, title = _a.title;
                    return divider ? (react_1.default.createElement(react_1.default.Fragment, { key: "select-option-divider--" + i },
                        divider !== true && (react_1.default.createElement("span", { className: "select-menu__divider-label" }, divider)),
                        react_1.default.createElement("div", { className: "select-menu__divider", key: "select-option--" + i }))) : (react_1.default.createElement("li", { className: "select-menu__item " + (selectedOption && selectedOption.value === value
                            ? "select-menu__item--selected"
                            : ""), onClick: function () { return handleSelectClick(value); }, key: "select-option--" + i, title: title },
                        react_1.default.createElement("span", { className: "select-menu__item-icon" }),
                        react_1.default.createElement("span", { className: "select-menu__item-label" }, label)));
                })))));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map
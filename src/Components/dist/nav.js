"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Nav = function () {
    return (react_1["default"].createElement("header", { className: "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" },
        react_1["default"].createElement("a", { className: "navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6", href: "#" }, "Company name"),
        react_1["default"].createElement("button", { className: "navbar-toggler position-absolute d-md-none collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#sidebarMenu", "aria-controls": "sidebarMenu", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            react_1["default"].createElement("span", { className: "navbar-toggler-icon" })),
        react_1["default"].createElement("input", { className: "form-control form-control-dark w-100 rounded-0 border-0", type: "text", placeholder: "Search", "aria-label": "Search" }),
        react_1["default"].createElement("div", { className: "navbar-nav" },
            react_1["default"].createElement("div", { className: "nav-item text-nowrap" },
                react_1["default"].createElement("a", { className: "nav-link px-3", href: "#" }, "Sign out")))));
};
exports["default"] = Nav;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" },
            react_1["default"].createElement("a", { className: "navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6", href: "#" }, "Company name"),
            react_1["default"].createElement("button", { className: "navbar-toggler position-absolute d-md-none collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#sidebarMenu", "aria-controls": "sidebarMenu", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                react_1["default"].createElement("span", { className: "navbar-toggler-icon" })),
            react_1["default"].createElement("input", { className: "form-control form-control-dark w-100 rounded-0 border-0", type: "text", placeholder: "Search", "aria-label": "Search" }),
            react_1["default"].createElement("div", { className: "navbar-nav" },
                react_1["default"].createElement("div", { className: "nav-item text-nowrap" },
                    react_1["default"].createElement("a", { className: "nav-link px-3", href: "#" }, "Sign out")))),
        react_1["default"].createElement("div", { className: "container-fluid" },
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("nav", { id: "sidebarMenu", className: "col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" },
                    react_1["default"].createElement("div", { className: "position-sticky pt-3 sidebar-sticky" },
                        react_1["default"].createElement("ul", { className: "nav flex-column" },
                            react_1["default"].createElement("li", { className: "nav-item" },
                                react_1["default"].createElement("a", { className: "nav-link active", "aria-current": "page", href: "#" },
                                    react_1["default"].createElement("span", { "data-feather": "home", className: "align-text-bottom" }),
                                    "Dashboard"))))),
                react_1["default"].createElement("main", { className: "col-md-9 ms-sm-auto col-lg-10 px-md-4" },
                    react_1["default"].createElement("div", { className: "table-responsive" },
                        react_1["default"].createElement("table", { className: "table table-striped table-sm" },
                            react_1["default"].createElement("thead", null,
                                react_1["default"].createElement("tr", null,
                                    react_1["default"].createElement("th", { scope: "col" }, "#"),
                                    react_1["default"].createElement("th", { scope: "col" }, "Header"),
                                    react_1["default"].createElement("th", { scope: "col" }, "Header"),
                                    react_1["default"].createElement("th", { scope: "col" }, "Header"),
                                    react_1["default"].createElement("th", { scope: "col" }, "Header"))),
                            react_1["default"].createElement("tbody", null,
                                react_1["default"].createElement("tr", null,
                                    react_1["default"].createElement("td", null, "1,001"),
                                    react_1["default"].createElement("td", null, "random"),
                                    react_1["default"].createElement("td", null, "data"),
                                    react_1["default"].createElement("td", null, "placeholder"),
                                    react_1["default"].createElement("td", null, "text"))))))))));
}
exports["default"] = App;

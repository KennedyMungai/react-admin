"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Menu = function () {
    return (react_1["default"].createElement("nav", { id: "sidebarMenu", className: "col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" },
        react_1["default"].createElement("div", { className: "position-sticky pt-3 sidebar-sticky" },
            react_1["default"].createElement("ul", { className: "nav flex-column" },
                react_1["default"].createElement("li", { className: "nav-item" },
                    react_1["default"].createElement("a", { className: "nav-link active", "aria-current": "page", href: "#" },
                        react_1["default"].createElement("span", { "data-feather": "home", className: "align-text-bottom" }),
                        "Dashboard"))))));
};
exports["default"] = Menu;

"use strict";
const React = require("react");
const ReactDom = require("react-dom");
const doc_ready_1 = require("doc-ready");
const App = () => {
    return (React.createElement("div", null,
        React.createElement("div", null, "\u307B\u3052")));
};
function default_1() {
    doc_ready_1.default(() => {
        ReactDom.render(React.createElement(App, null), document.getElementById('app'));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
console.log('read');
//# sourceMappingURL=index.js.map
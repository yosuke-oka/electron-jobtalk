"use strict";
const React = require("react");
const ReactDom = require("react-dom");
//import KuchikomiLink from './kuchikomiLink'
const webViewStyle = {
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};
const App = () => {
    return (React.createElement("div", null,
        React.createElement("a", { href: "https://jobtalk.jp/answer/post.html" }, "\u53E3\u30B3\u30DF\u6295\u7A3F"),
        React.createElement("div", { style: webViewStyle },
            React.createElement("webview", { id: "mainWebView", src: "https://jobtalk.jp" }))));
};
ReactDom.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=index.js.map
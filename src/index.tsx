import * as React from 'react'
import * as ReactDom from 'react-dom'
//import KuchikomiLink from './kuchikomiLink'

const webViewStyle = {
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
}

const App = () => {
    return (
        <div>
            <a href="https://jobtalk.jp/answer/post.html">口コミ投稿</a>
            <div style={webViewStyle}>
                <webview id="mainWebView" src="https://jobtalk.jp" />
            </div>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('app'))


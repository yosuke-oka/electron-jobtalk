import * as React from 'react'
import * as ReactDom from 'react-dom'
import docReady from 'doc-ready'

const App = () => {
    return (
        <div>
            <div>ほげ</div>
            { /*<webview id="mainWebView" src="https://jobtalk.jp" autosize="on" /> */}
        </div>
    )
}

export default function(){
   docReady( () => {
       ReactDom.render(<App />, document.getElementById('app'))
   })
}

console.log('read')


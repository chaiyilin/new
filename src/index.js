import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
})

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    margin: 0;
    box-sizing:border-box;
    font-family: 'Titillium Web', sans-serif
}
  }

  input, textarea, select, button, div {
    box-sizing:border-box;
  }
`

let Entry = (
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
)
if (process.env.NODE_ENV === 'development' && process.env.RELATIVE_LOCAL_PATH) {
  const LoadableComponent = Loadable({
    loader: () => import(`./${process.env.RELATIVE_LOCAL_PATH}`),
    loading() {
      return <div>Loading...</div>
    }
  })

  Entry = (
    <React.Fragment>
      <GlobalStyle />
      <LoadableComponent />
    </React.Fragment>
  )
}
ReactDOM.render(Entry, document.getElementById('root'))

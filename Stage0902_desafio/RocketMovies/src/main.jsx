import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <Home />
      </GlobalStyles>
    </ThemeProvider>
  </React.StrictMode>
)

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import React from 'react'

import { CreateMovie } from './pages/CreateMovie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>
)
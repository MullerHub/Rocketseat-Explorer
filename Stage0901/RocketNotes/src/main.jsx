import { ThemeProvider } from 'styled-components'
import GLobalStyles from './styles/global'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import React from 'react'
import './styles/global'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GLobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)

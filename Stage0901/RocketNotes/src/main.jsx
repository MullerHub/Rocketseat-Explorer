import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import { ThemeProvider} from 'styled-components'
import  theme from './styles/theme'
import GLobalStyles from './styles/global'
import './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GLobalStyles />
    <Details />
    </ThemeProvider>
  </React.StrictMode>
)

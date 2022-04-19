import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, css } from '@emotion/react'
import AppRoutes from './pages/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&family=Montserrat:wght@400;500;700;800&display=swap');
        html,
        body {
          background-color: #efefef;
        }
      `}
    />
    <AppRoutes />
  </React.StrictMode>
)

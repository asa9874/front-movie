import { createRoot } from 'react-dom/client'
import Movies from './pages/Movies'
import './styles/global.css'
import './styles/reset.css'
import { GlobalStateProvider } from './pages/Movies/context'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStateProvider>
      <Movies />
    </GlobalStateProvider>
  </StrictMode>
)

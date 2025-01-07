import { createRoot } from 'react-dom/client'
import Movies from './pages/Movies'
import './styles/global.css'
import './styles/reset.css'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Movies />
  </StrictMode>
)

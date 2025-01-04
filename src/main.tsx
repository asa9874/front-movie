import { createRoot } from 'react-dom/client'
import Movies from './pages/Movies'
import './styles/global.css'
import './styles/reset.css'
import { GlobalStateProvider } from './pages/Movies/context'

createRoot(document.getElementById('root')!).render(
  <GlobalStateProvider>
    <Movies />
  </GlobalStateProvider>,
)

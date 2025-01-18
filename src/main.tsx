import { createRoot } from 'react-dom/client'
import Movies from './pages/Movies'
import './styles/global.css'
import './styles/reset.css'
import ErrorBoundary from './pages/Movies/ErrorBoundary'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
      <Movies />
  </ErrorBoundary>
)

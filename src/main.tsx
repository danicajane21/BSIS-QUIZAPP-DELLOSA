import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FrontendComponents from './components/FrontendComponents.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrontendComponents />
  </StrictMode>,
)

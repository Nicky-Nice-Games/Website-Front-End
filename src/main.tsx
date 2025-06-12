import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-my7w0xyuzxg0t0db.us.auth0.com"
    clientId="sujDzfekNdyUySR7C2PoiZe7SnBwSUxO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
)

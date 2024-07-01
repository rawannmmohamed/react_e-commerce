import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { LanguageProvider } from './LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LanguageProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)

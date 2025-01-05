import React from 'react';
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import './styles/main.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)

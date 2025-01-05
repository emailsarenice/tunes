import React from 'react';
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import 'normalize.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)

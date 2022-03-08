import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './components/App';
import './pages/index.css';

ReactDOM.render(
 <React.StrictMode>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </React.StrictMode>,
 document.getElementById('root')
);
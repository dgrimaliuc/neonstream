import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/main.scss';

import App from './App';
import { TMDBConfigProvider } from './store/context/configurationProvider';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TMDBConfigProvider>
    <App />
  </TMDBConfigProvider>,
);

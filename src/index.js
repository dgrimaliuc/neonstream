import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import './text.css';
import App from './App';
import { TMDBContextProvider } from './store/context/configurationProvider';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TMDBContextProvider>
    <App />
  </TMDBContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {CarsContextProvider} from "./contexts/CarContext"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CarsContextProvider>
    <App />
    </CarsContextProvider>
  </React.StrictMode>
);

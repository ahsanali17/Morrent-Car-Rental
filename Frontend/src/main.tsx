import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';

import App from './App';
import { ModalContext } from './contexts/ModalContext';
import {CarsContextProvider} from "./contexts/CarContext"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContext>
      <ModalProvider>
      <CarsContextProvider>
        <App />
      </CarsContextProvider>
      </ModalProvider>
    </ModalContext>
  </React.StrictMode>
);

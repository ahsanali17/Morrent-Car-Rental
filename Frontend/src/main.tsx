import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';

import App from './App';
import { ModalContext } from './contexts/ModalContext';
import { DropDownContext } from './contexts/DropDownContext';
import { CarsContextProvider } from "./contexts/CarContext"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContext>
      <ModalProvider>
      <DropDownContext>
        <CarsContextProvider>
          <App />
        </CarsContextProvider>
      </DropDownContext>
      </ModalProvider>
    </ModalContext>
  </React.StrictMode>
);

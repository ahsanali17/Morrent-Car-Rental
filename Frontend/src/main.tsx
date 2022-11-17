import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';

import App from './App';
import { ModalContext } from './contexts/ModalContext';
import { DropDownContext } from './contexts/DropDownContext';
import { PickUpDropOffContext } from './contexts/PickUpDropOffContext';
import { CarsContextProvider } from "./contexts/CarContext"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContext>
      <ModalProvider>
      <PickUpDropOffContext>
        <DropDownContext>
          <CarsContextProvider>
            <App />
          </CarsContextProvider>
        </DropDownContext>
      </PickUpDropOffContext>
      </ModalProvider>
    </ModalContext>
  </React.StrictMode>
);

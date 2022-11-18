import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CarsContextProvider } from "./contexts/CarContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CarsContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CarsContextProvider>
  </React.StrictMode>
);

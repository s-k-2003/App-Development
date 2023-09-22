import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./Components/Redux/Store";

import './index.css';
import RouteApp from "./Routes/Routes";
import { Provider } from "react-redux";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <RouteApp/>
      </Router>

    </Provider>
  </React.StrictMode>
);



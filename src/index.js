import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites.context";
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

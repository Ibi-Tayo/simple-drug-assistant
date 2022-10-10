import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProvideAuth } from "./hooks/useAuth";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <App hideLoader={hideLoader} showLoader={showLoader} />
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);

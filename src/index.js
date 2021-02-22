import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/*initialstate to aktualne dane / reducer jak uzywac danych */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Output from "./components/Output";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/output" element={<Output />} />
    </Routes>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

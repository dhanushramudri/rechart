import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Output from "./components/Output";
import Landingpage from "./components/landingpage/Landingpage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/output" element={<Output />} />
      <Route path="/landing" element={<Landingpage />} />
    </Routes>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

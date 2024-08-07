// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Reward from "./pages/Reward";
import Finance from "./pages/Finance";
import Card from "./pages/Card";
import Me from "./pages/Me";
import Bottombar from "./components/generic/bottombar/Bottombar";
import Rightbar from "./components/generic/sidebar/Rightbar";
import Leftbar from "./components/generic/sidebar/Leftbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/card" element={<Card />} />
        <Route path="/Me" element={<Me />} />
      </Routes>

      <Bottombar />
      <Leftbar />
      <Rightbar />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carte from "./pages/Carte";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

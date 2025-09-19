import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bolos from "./pages/bolos";
import Tortas from "./pages/tortas";
import Trufas from "./pages/trufas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bolos" element={<Bolos />} />
        <Route path="/tortas" element={<Tortas />} />
        <Route path="/trufas" element={<Trufas />} />
      </Routes>
    </Router>
  );
}

export default App;
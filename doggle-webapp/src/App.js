import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Navigation Bar/Navbar";
import About from "./About Page/About";
import Home from "./Main Pages/HomePage";
import Encyclopedia from "./Encylopedia Page/Encyclopedia";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/encylopedia" element={<Encyclopedia />} />
      </Routes>
    </div>
  );
}

export default App;

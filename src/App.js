import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Design from "./routes/Design";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/design" element={<Design />} />
    </Routes>
    </>
  );
}

export default App;

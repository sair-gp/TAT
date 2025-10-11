//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import React from "react";
//import Home from "./components/Home.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

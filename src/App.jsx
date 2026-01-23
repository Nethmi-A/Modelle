import { useState } from "react";
import Splash from "./components/Splash";
import Home from "./pages/Home";
import About from "./components/About";
import Features from "./components/HowItWorks3D";
import Contact from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  // Once splash is done, render the routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

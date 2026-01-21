import { useState } from "react";
import Splash from "./components/Splash";
import Home from "./pages/Home";
import { Routes, Route }from 'react-router-dom';    

// import Home from "./pages/Home";
import About from "./components/About";
import Features from "./components/HowItWorks3D";
import Contact from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
      {!showSplash && <Home />}
    </>
  );
}

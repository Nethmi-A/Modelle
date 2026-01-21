import { useEffect, useState } from "react";
import LoadingIcon from "./LoadingIcon";
import "../styles/Splash.css";

export default function Splash({ onFinish }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 600);
    const endTimer = setTimeout(() => onFinish(), 3200);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className={`brand-core ${showContent ? "show" : ""}`}>
        <LoadingIcon />

        {/* Logo on top of cube */}
        {/* <img
          src="/Modelle-logo.png"
          alt="Modelle"
          className="splash-logo-overlay"
        /> */}
      </div>

      <p className={`splash-tagline ${showContent ? "show" : ""}`}>
        Where 3D Imaginations Come To Life
      </p>
    </div>
  );
}

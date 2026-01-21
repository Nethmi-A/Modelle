import { useState } from "react";
import CTA from "./CTA";
import { Routes, Route} from 'react-router-dom';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        {/* Logo */}
        <div style={styles.logo}>
          <img
            src="/Modelle-logo.png"
            alt="Modelle"
            style={styles.logoImg}
          />
        </div>

        {/* Desktop Links */}
        <ul style={styles.links} className="desktop-only">
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>

        {/* Desktop Actions */}
        <div style={styles.actions} className="desktop-only">
          <button style={styles.login}>Login</button>
          <CTA
            variant="getStarted"
            style={{
              padding: "8px 20px",
              margin: 0,
              borderRadius: "20px",
              border: "none",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>

        {/* Hamburger */}
        <div
          style={styles.hamburger}
          className="mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-only mobileMenu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)} // Close on click outside
      >
        <div className="mobileMenuContent" onClick={(e) => e.stopPropagation()}> {/* Prevent close on content click */}
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>Contact</a>

          <div className="mobileActions">
            <button className="login" onClick={() => setMenuOpen(false)}>Login</button>
            <CTA
              variant="getStarted"
              style={{
                padding: "8px 20px",
                margin: 0,
                borderRadius: "20px",
                border: "none",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setMenuOpen(false)} // Close on CTA click
            />
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .desktop-only {
          display: flex;
        }
        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }

        .mobileMenu {
          position: fixed;
          top: 0;
          right: 0;
          width: 70%;
          height: 100%;
          background-color: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(10px);
          padding: 2rem 1.5rem;
          z-index: 10000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          cursor: pointer; /* Indicate clickable to close */
        }

        .mobileMenu.open {
          transform: translateX(0);
        }

        .mobileMenuContent {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }

        .mobileLink {
          color: #ccc;
          text-decoration: none;
          font-size: 1.2rem;
          padding: 0.5rem 0;
          cursor: pointer;
        }

        .mobileActions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: auto; /* Push to bottom */
        }

        .mobileActions button {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    margin: -2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 5vw",
    backgroundColor: "rgba(15, 15, 15, 0.75)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #222",
    width: "100%",
    border: "none",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    height: "50px",
    width: "auto",
  },
  links: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    color: "#ccc",
    cursor: "pointer",
  },
  actions: {
    display: "flex",
    gap: "1rem",
  },
  login: {
    background: "transparent",
    color: "#ccc",
    border: "none",
    cursor: "pointer",
  },
  hamburger: {
    fontSize: "24px",
    color: "#ccc",
    cursor: "pointer",
  },
};
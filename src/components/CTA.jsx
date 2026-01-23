import React from "react";

export default function CTA({ variant, style }) {
  const buttons = {
    getStarted: {
      text: "Get Started",
      link: "/signup",
      style: "primary",
    },
    joinCommunity: {
      text: "Join the Community",
      link: "/community",
      style: "primary",
    },
    exploreFeatures: {
      text: "Explore Features",
      link: "/HowItWorks3D",
      style: "secondary",
    },
    login: {
      text: "Log In",
      link: "/login",
      style: "secondary"
    }
  };

  const btn = buttons[variant];
  if (!btn) return null;

  return (
    <>
      <a href={btn.link} className={`cta-button ${btn.style}`} style={style}>
        {btn.text}
      </a>

      {/* CSS for both primary and secondary buttons */}
      <style jsx>{`
        .cta-button {
          margin-top: 2rem;
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: bold;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align:center;
          justify-content:center;
        }

        /* Primary button: gradient background */
        .cta-button.primary {
          background: linear-gradient(
            90deg,
            #00f5ff 5%,
            #7d98f3 50%,
            #8b5cf6 100%
          );
          color: black;
          border: none;
        }

        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 245, 255, 0.4);
        }

        /* Secondary button: gradient border with transparent center */
        .cta-button.secondary {
          border: 2px solid transparent;
          background-image:
            linear-gradient(#0f0f0f, #0f0f0f),
            linear-gradient(90deg, #00f5ff 5%, #7d98f3 50%, #8b5cf6 100%);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          color: white;
        }

        .cta-button.secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 245, 255, 0.4);
        }
      `}</style>
    </>
  );
}

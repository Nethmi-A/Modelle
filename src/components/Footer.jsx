import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <ul style={styles.iconList}>
        <li>
          <a href="mailto:app.modelle@gmail.com" className="footer-link">
            <img src="/email.svg" alt="email" />
            <p>Email</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/Pawani-Nethmini/MODELLE---SDGP" className="footer-link">
            <img src="/github.svg" alt="github" />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/modelle-platform" className="footer-link">
            <img src="/linkedin.svg" alt="linkedin" />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/modelleweb?igsh=aHZ6MWc5eXAwMDl0&utm_source=qr" className="footer-link">
            <img src="/insta.svg" alt="instagram" />
            <p>Instagram</p>
          </a>
        </li>
      </ul>
      <p style={styles.copyright}>© 2025 Modelle. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "2rem",
    borderTop: "1px solid #222",
    textAlign: "center",
    color: "#777",
  },
  iconList: {
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
    listStyle: "none",
    padding: 0,
    marginBottom: "1rem",
  },
  copyright: {
    fontSize: "0.9rem",
    color: "#555",
    marginTop: "1rem",
  }
};

import "../styles/blog1.css";
import logo from "../assets/new-logo.png";
import { useState, useEffect, useRef } from "react";

export default function BlogArticle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);
  return (
    <div className="page-root">
      {/* Navigation */}
      <nav className="nav" ref={navRef}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="logo">
            <img src={logo} alt="Wego Holiday Homes" className="logo-image" />
          </a>

          {/* Desktop CTA */}
          <a href="/ukanddubai" className="btn-primary desktop-cta">
            Book Stay
          </a>

          {/* Hamburger */}
          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="/insights" className="mobile-link" onClick={handleLinkClick}>
            Insights
          </a>
          <a href="/ukanddubai" className="btn-primary mobile-btn" onClick={handleLinkClick}>
            Book Stay
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="content fade-up">
        {/* Back */}
        <div className="back-link">
          <a href="/insights">← Back to Insights</a>
        </div>

        {/* Article */}
        <article className="article">
          <header className="article-header">
            <div className="article-meta">
              <span>Landlords</span>
              <span className="dot" />
              <span>Dubai Market</span>
            </div>

            <h1>
              Holiday Home Management in Dubai: What Landlords Need to Know
            </h1>

            <div className="author-row">
              <div className="author">
                <div className="avatar" />
                <div>
                  <p className="author-name">Wego Editorial Team</p>
                  <p className="author-date">Dec 15, 2025 · 6 Min Read</p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="featured-image">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/369d88d8-45b3-45d0-8c59-a313093cf3bb_1600w.jpg"
              alt="Dubai Marina Skyline"
            />
          </div>

          {/* Body */}
          <div className="article-body">
            <p className="intro">
              Holiday home management in Dubai has become an increasingly
              attractive option for landlords looking to maximise rental income.
            </p>

            <p>
              This guide explains what landlords need to know before entering
              the Dubai holiday home market.
            </p>

            <h2>Understanding Holiday Home Regulations in Dubai</h2>
            <p>
              All short-term rentals in Dubai are regulated by the Department of
              Economy and Tourism (DET).
            </p>

            <div className="info-box">
              <p className="info-title">Key Requirements Include:</p>
              <ul>
                <li>Valid title deed or landlord authorisation</li>
                <li>Holiday home permit and classification</li>
                <li>Compliance with safety and quality standards</li>
                <li>Registration on approved booking platforms</li>
              </ul>
            </div>

            <h2>Why Professional Holiday Home Management Matters</h2>
            <ul className="feature-list">
              <li>Licensing and regulatory compliance</li>
              <li>Dynamic pricing and revenue optimisation</li>
              <li>Guest screening and communication</li>
              <li>Cleaning, linen, and inspections</li>
            </ul>

            <h2>Final Thought</h2>
            <p>
              Holiday home management in Dubai offers strong income potential,
              but only when done compliantly and professionally.
            </p>

            {/* CTA */}
            <div className="cta-box">
              <h3>Considering short-term rentals in Dubai?</h3>
              <p>
                Request a professional ROI assessment before making a decision.
              </p>
              <a href="#" className="cta-btn">
                Request ROI Assessment
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-logo">
              WEGO<span>HOLIDAY HOMES</span>
            </span>
            <p className="footer-tagline">Luxury Short-Term Rentals</p>
          </div>

          <div className="footer-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#">Insights</a>
            <a href="https://wa.me/">Contact</a>
          </div>

          <div className="footer-copy">
            © 2024 Wego Holiday Homes.
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/" className="whatsapp">
        💬
      </a>
    </div>
  );
}

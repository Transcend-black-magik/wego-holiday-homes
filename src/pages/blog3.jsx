import "../styles/blog4.css";
import "../styles/blog1.css";
import logo from "../assets/new-logo.png";
import { useState, useEffect, useRef } from "react";
export default function ShortTermRentalInvesting() {
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
      <main className="main fade-up">
        <div className="breadcrumb">
          <a href="/insights">← Back to Insights</a>
        </div>
        <article className="article">
          <header className="article-header">
            <div className="tags">
              <span>Investment</span>
              <span className="dot" />
              <span>Management</span>
            </div>

            <h1>
              How Investors Earn from Short-Term Rentals Without Managing
              Properties
            </h1>

            <div className="author-bar">
              <div className="author">
                <img
                  src="https://ui-avatars.com/api/?name=Wego&background=B08D55&color=fff"
                  alt=""
                />
                <div>
                  <p className="author-name">Wego Editorial Team</p>
                  <p className="author-meta">
                    Jan 12, 2026 · 4 Min Read
                  </p>
                </div>
              </div>

              <div className="actions">
                <button>⤴</button>
                <button>🔖</button>
              </div>
            </div>
          </header>

          <div className="featured">
            <img
              src="https://images.unsplash.com/photo-1621215052063-6ed29c948b31?w=1600&q=80"
              alt="Property Management Dashboard"
            />
          </div>

          <div className="content">
            <p className="intro">
              Many property investors are attracted to short-term rentals but
              hesitate due to the perceived workload.
            </p>

            <p>
              In reality, experienced investors earn from short-term rentals
              without managing day-to-day operations by working with
              professional operators.
            </p>

            <h2>The Problem with Self-Managing</h2>

            <div className="box">
              <ul>
                <li>Pricing optimisation based on demand</li>
                <li>Guest communication and screening</li>
                <li>Cleaning and maintenance coordination</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>

            <h2>Common Structures Used by Investors</h2>

            <div className="cards">
              <div className="card">
                <h3>Management Model</h3>
                <p>
                  The investor owns the property and appoints an operator for a
                  percentage of revenue.
                </p>
              </div>

              <div className="card">
                <h3>Co-Hosting Model</h3>
                <p>
                  The operator manages bookings while the owner retains control.
                </p>
              </div>

              <div className="card">
                <h3>Joint Venture</h3>
                <p>
                  Capital and expertise are combined with profit sharing.
                </p>
              </div>
            </div>

            <h2>Final Thought</h2>

            <p>
              Short-term rentals can be hands-off investments when structured
              correctly.
            </p>

            <div className="cta">
              <h3>Investing without the headache?</h3>
              <p>
                Request a professional ROI assessment to explore your options.
              </p>
              <a href="#">Request ROI Assessment</a>
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

import "../styles/blog4.css";
import "../styles/blog1.css";
import logo from "../assets/new-logo.png";
import { useState, useEffect, useRef } from "react";
export default function InsightsArticle() {
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
      {/* NAV */}
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

      {/* MAIN */}
      <main className="content fade-up">
        <div className="breadcrumb">
          <a href="/insights">← Back to Insights</a>
        </div>

        <article className="article">
          <header className="article-header">
            <div className="meta">
              <span>Market Outlook</span>
              <span className="dot" />
              <span>Dubai</span>
            </div>

            <h1>
              Dubai Holiday Homes in 2025: What Landlords and Investors Should
              Expect
            </h1>

            <div className="author-bar">
              <div className="author">
                <img
                  src="https://ui-avatars.com/api/?name=Wego&background=B08D55&color=fff"
                  alt="Author"
                />
                <div>
                  <p>Wego Editorial Team</p>
                  <span>Dec 02, 2025 · 5 Min Read</span>
                </div>
              </div>

              <div className="actions">
                <button>⤴</button>
                <button>🔖</button>
              </div>
            </div>
          </header>

          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1592822939448-674743ebab38?w=1600&q=80"
              alt="Dubai Marina"
            />
          </div>

          <div className="article-body">
            <p className="intro">
              Dubai remains one of the most dynamic short-term rental markets
              globally. As tourism, business travel, and international investment
              continue to grow, Dubai holiday homes are expected to play an even
              larger role in 2025.
            </p>

            <p>
              This article outlines what landlords and investors should
              realistically expect from the Dubai holiday home market.
            </p>

            <h2>Market Demand and Travel Trends</h2>
            <p>
              Demand continues across leisure tourism, corporate travel, and
              extended stays in prime locations.
            </p>

            <h2>Regulatory Environment</h2>
            <p>
              Dubai’s market is well regulated, requiring licensing and quality
              compliance.
            </p>

            <ul className="checklist">
              <li>Structured, professional market</li>
              <li>Reduced unregulated competition</li>
              <li>Higher investor confidence</li>
            </ul>

            <h2>Final Thought</h2>
            <p>
              Dubai’s holiday home market in 2025 offers opportunity, not
              guarantees. Strategic positioning is key.
            </p>

            <div className="cta-box">
              <h3>Considering Dubai holiday homes in 2025?</h3>
              <p>
                Request a tailored ROI assessment backed by real market data.
              </p>
              <a href="#" className="btn-light">Request ROI Assessment</a>
            </div>
          </div>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="logo">
              WEGO<span>HOLIDAY HOMES</span>
            </span>
            <p className="tagline">Luxury Short-Term Rentals</p>
          </div>

          <div className="footer-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#">Insights</a>
            <a href="https://wa.me/">Contact</a>
          </div>

          <span className="copyright">
            © 2025 Wego Holiday Homes
          </span>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/" className="whatsapp">
        💬
      </a>
    </div>
  );
}

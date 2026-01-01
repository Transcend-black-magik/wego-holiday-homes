import React, { useState } from "react";
import "../styles/InsightsPage.css";
import logo from "../assets/new-logo.png";

export default function InsightsPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="page-root">
      {/* NAV */}
      <nav className="navbar">
  <div className="nav-inner">
    {/* Logo */}
    <a href="/" className="logo">
      <img src={logo} alt="Wego Holiday Homes" className="logo-image" />
    </a>

    {/* Desktop Links */}
    <div className="nav-links">
      <a href="/" className="btn-primary">
        Home
      </a>
    </div>

    {/* Hamburger (Mobile) */}
    <div className="hamburger-wrapper">
      <span
        className="menu-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </span>

      {isOpen && (
        <div className="mobile-dropdown">
          <a href="/" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </div>
      )}
    </div>
  </div>
</nav>


      {/* MAIN */}
      <main className="main-content fade-up">
        {/* HEADER */}
        <header className="page-header">
          <div className="header-tag">
            <span className="dot" />
            <span>Knowledge Hub</span>
          </div>

          <h1>
            Short-Term Rental &amp;<br />
            <span>Holiday Home Insights</span>
          </h1>

          <p className="lead">
            Short-term rentals and holiday homes continue to reshape the property
            market across the UK and Dubai. From income strategy to compliance and
            management, success depends on understanding how the model works in
            practice.
          </p>

          <p className="sub-lead">
            This insights hub brings together expert guidance for landlords and
            investors exploring holiday home management and performance across
            key markets.
          </p>
        </header>

        {/* GRID */}
        <section className="insights-grid">
          <div className="articles-grid">
            {/* Card 1 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
              </div>

              <h2 className="article-title">
                Holiday Home Management in Dubai
              </h2>

              <p className="article-desc">
                Dubai is one of the world’s most regulated and opportunity-rich
                short-term rental markets.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Licensing and compliance requirements
                  </li>
                  <li>
                    <span className="dot" />
                    Income potential and realistic expectations
                  </li>
                  <li>
                    <span className="dot" />
                    Why professional holiday home management matters
                  </li>
                </ul>
              </div>

              <a href="/blog1" className="article-link">
                Read Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 2 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </div>

              <h2 className="article-title">
                Short-Term Rentals vs Long-Term Lets
              </h2>

              <p className="article-desc">
                Choosing the right rental strategy is critical for profitability and
                risk management.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Income comparison between short-term and long-term lets
                  </li>
                  <li>
                    <span className="dot" />
                    Cost structures and net returns
                  </li>
                  <li>
                    <span className="dot" />
                    Flexibility and control considerations
                  </li>
                </ul>
              </div>

              <a href="/blog2" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 3 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>

              <h2 className="article-title">
                Investor Strategies for Short-Term Rentals
              </h2>

              <p className="article-desc">
                Many investors earn from short-term rentals without managing
                operations themselves.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Hands-off investment structures
                  </li>
                  <li>
                    <span className="dot" />
                    Management and co-hosting models
                  </li>
                  <li>
                    <span className="dot" />
                    Risk and return considerations
                  </li>
                </ul>
              </div>

              <a href="/blog3" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 4 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>

              <h2 className="article-title">
                Dubai Holiday Homes Market Outlook
              </h2>

              <p className="article-desc">
                Understanding market direction is essential for long-term
                performance.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Demand trends and regulation
                  </li>
                  <li>
                    <span className="dot" />
                    Income expectations in 2025
                  </li>
                  <li>
                    <span className="dot" />
                    Strategic portfolio positioning across UK and Dubai
                  </li>
                </ul>
              </div>

              <a href="/blog4" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 5 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>

              <h2 className="article-title">
                Dubai Holiday Homes Market Outlook
              </h2>

              <p className="article-desc">
                Understanding market direction is essential for long-term
                performance.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Demand trends and regulation
                  </li>
                  <li>
                    <span className="dot" />
                    Income expectations in 2025
                  </li>
                  <li>
                    <span className="dot" />
                    Strategic portfolio positioning across UK and Dubai
                  </li>
                </ul>
              </div>

              <a href="/blog5" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 6 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>

              <h2 className="article-title">
                Dubai Holiday Homes Market Outlook
              </h2>

              <p className="article-desc">
                Understanding market direction is essential for long-term
                performance.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Demand trends and regulation
                  </li>
                  <li>
                    <span className="dot" />
                    Income expectations in 2025
                  </li>
                  <li>
                    <span className="dot" />
                    Strategic portfolio positioning across UK and Dubai
                  </li>
                </ul>
              </div>

              <a href="/blog6" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 7 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>

              <h2 className="article-title">
                Dubai Holiday Homes Market Outlook
              </h2>

              <p className="article-desc">
                Understanding market direction is essential for long-term
                performance.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Demand trends and regulation
                  </li>
                  <li>
                    <span className="dot" />
                    Income expectations in 2025
                  </li>
                  <li>
                    <span className="dot" />
                    Strategic portfolio positioning across UK and Dubai
                  </li>
                </ul>
              </div>

              <a href="/blog7" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            {/* Card 8 */}
            <article className="article-card">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>

              <h2 className="article-title">
                Dubai Holiday Homes Market Outlook
              </h2>

              <p className="article-desc">
                Understanding market direction is essential for long-term
                performance.
              </p>

              <div className="article-body">
                <span className="explore-label">Explore:</span>
                <ul className="article-list">
                  <li>
                    <span className="dot" />
                    Demand trends and regulation
                  </li>
                  <li>
                    <span className="dot" />
                    Income expectations in 2025
                  </li>
                  <li>
                    <span className="dot" />
                    Strategic portfolio positioning across UK and Dubai
                  </li>
                </ul>
              </div>

              <a href="/blog8" className="article-link">
                Read Article
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>
          </div>
        </section>

      {/* CTA */}
      <section className="closing-cta">
        <div className="cta-box">
          <h3 className="cta-title">
            Short-term rentals can offer strong returns
            <br className="cta-break" />
            when approached strategically.
          </h3>

          <p className="cta-text">
            If you are considering holiday home management or short-term rentals
            in the UK or Dubai, a tailored assessment is the smartest first step.
          </p>

          <div className="cta-actions">
            <a href="#" className="cta-btn primary">
              Request an ROI Assessment
            </a>

            <a href="#" className="cta-btn secondary">
              Speak to Our Team
            </a>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <span className="brand-title">
              WEGO<span className="brand-accent">HOLIDAY HOMES</span>
            </span>
            <p className="brand-tagline">Luxury Short-Term Rentals</p>
          </div>

          {/* Navigation */}
          <nav className="footer-nav">
            <a href="#" className="footer-link">UK Homes</a>
            <a href="#" className="footer-link">Dubai</a>
            <a href="#" className="footer-link">Insights</a>
            <a href="https://wa.me/" className="footer-link">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="footer-copy">
            © 2025 Wego Holiday Homes.
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property." className="whatsapp-float" aria-label="Chat on WhatsApp">
        <span className="tooltip">Speak to an Expert</span>
        <div className="whatsapp-btn">💬</div>
      </a>
    </div>
  );
}

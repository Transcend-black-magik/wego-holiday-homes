import React, { useState } from "react";
import "../styles/ShortTermVsLongTerm.css";

const ShortTermVsLongTerm = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <a href="/pillar-page" className="logo">
            <span className="logo-text">
              WEGO<span className="logo-highlight">HOLIDAY HOMES</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="nav-links desktop">
            <a href="#" className="nav-link">
              UK Homes
            </a>
            <a href="#" className="nav-link">
              Dubai
            </a>
            <a href="#" className="nav-link active">
              Insights
            </a>
          </div>

          {/* CTA / Mobile Hamburger */}
          <div className="nav-cta">
            <a href="#" className="cta-button desktop">
              Book Stay
            </a>
            <button
              className="menu-button mobile"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className={`nav-links mobile ${menuOpen ? "open" : ""}`}>
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#">Insights</a>
            <a href="#" className="cta-mobile">
              Book Stay
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content fade-up">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <a href="/pillar-page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19l-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Analysis
          </a>
        </div>

        {/* Article */}
        <article className="article-wrapper">
          <header className="article-header">
            <div className="tags">
              <span>Investment Strategy</span>
              <span className="dot"></span>
              <span>Dubai Market</span>
            </div>
            <h1>Short-term rentals vs long-term lets: Investor guide</h1>

            <div className="intro-text">
              <p>
                Deciding between short-term rentals (holiday homes) and
                long-term lets (traditional tenancy) is a fundamental choice for
                Dubai property investors. Each strategy alters the risk profile,
                cash flow, and liquidity of the asset.
              </p>
              <p>
                This guide compares the two models based on net yields,
                operational requirements, and asset flexibility.
              </p>
              <p>
                It is intended for landlords and investors seeking clarity on
                which operating model aligns with their financial objectives in
                the current market cycle.
              </p>
            </div>

            {/* Author / Date / Share */}
            <div className="author-bar">
              <div className="author-info">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1670996324046-f489f28de4e4?w=320&q=80"
                    alt="Author"
                  />
                </div>
                <div>
                  <p className="author-name">Wego Analysis Team</p>
                  <p className="author-date">Dec 02, 2025</p>
                </div>
              </div>
              <div className="share-icon">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1670996324046-f489f28de4e4?w=1600&q=80"
              alt="Dubai Downtown Apartment Interior"
            />
          </div>

          {/* Main Sections */}
          <div className="article-body">
            <h2>Yields and Cash Flow</h2>
            <p>
              The primary driver for choosing short-term rentals is the
              potential for higher gross income. In prime locations such as
              Dubai Marina or Downtown, short-term lets can generate 15% to 25%
              more revenue than a standard yearly lease.
            </p>
            <p>
              However, investors must account for higher operating costs.
              Short-term rentals require the landlord to cover utilities,
              internet, and furnishing costs. Management fees for holiday homes
              typically range from 15% to 20% of revenue.
            </p>
            <p>
              Long-term lets offer lower gross income but significantly lower
              expenses. The tenant pays for utilities, and management fees are
              standardly 5% to 8%. The net yield gap narrows once these costs
              are factored in, though short-term often retains a premium in
              high-demand zones.
            </p>

            <h2>Asset Flexibility and Liquidity</h2>
            <p>
              A key advantage of the short-term model is flexibility. Properties
              are not locked into 12-month renewable contracts.
            </p>
            <p>
              This allows owners to sell the property vacant on possession,
              which appeals to end-users and often commands a higher sales
              price. In contrast, selling a property with a sitting tenant on a
              long-term lease can restrict the pool of potential buyers to
              investors only.
            </p>
            <p>
              Additionally, short-term rentals allow landlords personal use of
              the asset for specific weeks during the year, a benefit not
              possible with a long-term tenant.
            </p>

            <h2>Operational Considerations</h2>
            <p>
              Short-term rentals are operationally intensive. They require
              dynamic pricing, guest communication, cleaning coordination, and
              maintenance between stays. This necessitates a professional
              operator or significant personal time investment.
            </p>
            <p>
              Long-term lets are passive. Once a tenant is secured and cheques
              are collected, interaction is minimal, primarily limited to lease
              renewals and occasional maintenance requests.
            </p>

            <h2>Market Volatility and Vacancy</h2>
            <p>
              Long-term leases provide income stability. A signed contract
              guarantees rent for the year, regardless of seasonal tourism
              fluctuations.
            </p>
            <p>
              Short-term rentals are sensitive to seasonality. In Dubai, Q1 and
              Q4 see peak occupancy and rates, while summer months may see
              reduced yields. Investors must have sufficient cash reserves to
              smooth out income variances across the calendar year.
            </p>

            {/* Takeaways */}
            <div className="takeaways">
              <h3>Investor Takeaways</h3>
              <ul>
                <li>Short-term rentals typically outperform long-term lets by 15-20% in prime tourist areas.</li>
                <li>Short-term allows for easier sale of the asset and personal use.</li>
                <li>Long-term leases offer predictable cash flow and protection against seasonal dips.</li>
                <li>Short-term requires professional management; long-term is largely passive.</li>
              </ul>
            </div>

            <h2>Summary</h2>
            <p>
              The choice depends on the investor's risk tolerance and need for
              liquidity. Investors prioritizing maximum yield and asset
              flexibility are better suited to short-term rentals, provided
              they account for seasonality. Those seeking consistent,
              hands-off income with lower volatility should prefer long-term
              lets.
            </p>
          </div>
        </article>

        {/* CTA Section */}
        <section className="cta-section">
          <h3>Unsure which strategy suits your property?</h3>
          <p>
            We provide data-backed revenue projections comparing short-term
            vs long-term performance for your specific unit.
          </p>
          <a href="#" className="cta-btn">
            Request Revenue Analysis
          </a>
          <span className="cta-note">Free • No Obligation</span>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-brand">
            WEGO<span className="logo-highlight">HOLIDAY HOMES</span>
            <p className="footer-sub">Luxury Short-Term Rentals</p>
          </div>
          <div className="footer-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#">Insights</a>
            <a href="https://wa.me/">Contact</a>
          </div>
          <div className="footer-copy">© 2026 Wego Holiday Homes.</div>
        </div>
      </footer>
    </div>
  );
};

export default ShortTermVsLongTerm;

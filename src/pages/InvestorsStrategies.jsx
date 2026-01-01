import React from "react";
import "../styles/InvestorsStrategies.css";
import logoImg from "../assets/new-logo.png";
const InvestorsStrategies = () => {
  return (
    <div className="page-container">

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Logo */}
         <a href="/" className="logo">
            <img src={logoImg} alt="Wego Holiday Homes" className="logo-image" />
          </a>

          {/* Desktop Links */}
          <div className="desktop-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a className="active" href="#">Insights</a>
          </div>

          {/* CTA */}
          <div className="navbar-cta">
            <a href="#" className="book-stay">Book Stay</a>
            <button className="mobile-menu-btn">
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
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
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
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Insights
          </a>
        </div>

        {/* Article */}
        <article className="article">
          {/* Hero */}
          <header className="article-header">
            <div className="tags">
              <span>Market Analysis</span>
              <span className="dot"></span>
              <span>Strategy</span>
            </div>

            <h1 className="article-title">
              Investors Strategies for Short Term Rentals
            </h1>

            <div className="author-share">
              <div className="author-info">
                <div className="avatar">
                  <img
                    src="https://ui-avatars.com/api/?name=Wego&background=B08D55&color=fff"
                    alt="Wego Editorial Team"
                  />
                </div>
                <div>
                  <p className="author-name">Wego Editorial Team</p>
                  <p className="author-role">Research</p>
                </div>
              </div>
              <div className="share-buttons">
                <button className="icon-btn share">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
                <button className="icon-btn bookmark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Intro Text */}
          <div className="article-body">
            <p>
              Short-term rentals have shifted from a niche income stream to a primary asset class for institutional and private investors. This asset class offers higher gross yield potential compared to traditional buy-to-let models, but it introduces operational complexities that impact net returns.
            </p>
            <p>
              This guide outlines the core strategies for deploying capital into short-term rentals in the UK and Dubai. It addresses the decision-making process regarding location, yield expectations, and regulatory compliance.
            </p>
            <p>
              Investors reading this will gain clarity on whether the increased operational requirements of short-term letting align with their portfolio goals and risk tolerance.
            </p>

            {/* Sections */}
            <h2>Yield Potential vs. Income Stability</h2>
            <p>
              The primary driver for short-term rental investment is yield. In prime locations, short-lets can generate 20% to 40% higher gross income than long-term leases. This premium compensates for the lack of guaranteed occupancy.
            </p>
            <p>
              Unlike a standard AST (Assured Shorthold Tenancy) where income is fixed for 12 months, short-term revenue fluctuates with seasonality. Investors must budget for void periods, particularly in January and February for UK assets, or summer months for certain Dubai districts. Net yield calculations must account for this variance to be accurate.
            </p>

            <h2>Operational Costs and Management</h2>
            <p>
              Short-term rentals are operationally intensive. Turnover is high, requiring professional cleaning, linen services, and guest communication between every stay. These costs are non-negotiable for maintaining asset value and guest ratings.
            </p>
            <p>
              Management fees typically range from 15% to 25% of gross revenue, plus VAT. While self-management can reduce this expense, it essentially converts the investment into a part-time job. For overseas landlords or board-level investors, full management is usually the only viable route to passive income.
            </p>

            <h2>Regulation and Zoning Compliance</h2>
            <p>
              Regulatory risk is the most significant external factor. In Dubai, the Department of Economy and Tourism (DET) enforces strict licensing standards. All units must be registered, and operators must adhere to the Holiday Home Regulation Guide.
            </p>
            <p>
              In the UK, regulations vary by council. London enforces a 90-day rule, limiting short-term lets to 90 nights per year unless planning permission is granted. Violating these planning conditions can result in enforcement notices and significant fines. Due diligence on local zoning is mandatory before acquisition.
            </p>

            <h2>Tax Implications</h2>
            <p>
              The tax treatment of short-term rentals differs from buy-to-let properties. In the UK, properties qualifying as Furnished Holiday Lettings (FHL) currently benefit from specific capital allowances, though tax landscapes shift.
            </p>
            <p>
              In the UAE, income is generally tax-free for individuals, but corporate tax implications may apply for entities holding multiple assets. Investors should consult a qualified tax advisor to understand how this strategy impacts their specific liability.
            </p>

            {/* Investor Takeaways */}
            <div className="takeaways">
              <h3>Investor Takeaways</h3>
              <ul>
                <li><span className="bullet"></span><span><strong>Calculate net, not gross:</strong> Deduct 20-30% for management and operations before projecting ROI.</span></li>
                <li><span className="bullet"></span><span><strong>Verify zoning:</strong> Confirm the property is eligible for short-term letting in its specific municipality.</span></li>
                <li><span className="bullet"></span><span><strong>Furnish for durability:</strong> Select contract-grade furniture to minimize replacement costs over time.</span></li>
                <li><span className="bullet"></span><span><strong>Plan for seasonality:</strong> Ensure cash flow reserves cover distinct low-occupancy periods.</span></li>
              </ul>
            </div>

            <p className="conclusion">
              Short-term rentals are a high-yield, high-effort asset class. They fit portfolios prioritized for maximum cash flow rather than passive stability. Success requires strict adherence to compliance and a realistic budget for professional management.
            </p>

            {/* CTA */}
            <div className="cta-block">
              <div className="cta-content">
                <h3>Maximizing Asset Performance?</h3>
                <p>If you own property in London or Dubai, our management team can provide a detailed yield projection based on current market data.</p>
              </div>
              <div className="cta-buttons">
                <a href="#" className="cta-primary">
                  Request Yield Estimate
                </a>
                <a href="#" className="cta-secondary">
                  Investment Advisory
                </a>
              </div>
            </div>

          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            WEGO<span className="logo-highlight">HOLIDAY HOMES</span>
            <p>Luxury Short-Term Rentals</p>
          </div>
          <div className="footer-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#">Insights</a>
            <a href="https://wa.me/">Contact</a>
          </div>
          <div className="footer-copy">© 2025 Wego Holiday Homes.</div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <a href="https://wa.me/" className="wa-widget">
        <div className="wa-tooltip">Speak to an Expert</div>
        <button className="wa-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          </svg>
        </button>
      </a>

    </div>
  );
};

export default InvestorsStrategies;

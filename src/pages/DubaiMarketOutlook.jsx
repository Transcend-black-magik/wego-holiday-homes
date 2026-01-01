import React, { useState } from "react";
import "../styles/DubaiMarketOutlook.css";
import logoImg from "../assets/new-logo.png";
import { Briefcase, Check, ArrowRight } from "lucide-react"; // Assuming lucide-react package
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor">
    <path d="M6 3l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor">
    <rect x="3" y="7" width="14" height="10" strokeWidth="2"/>
    <path d="M7 7V4h6v3" strokeWidth="2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor">
    <path d="M5 10l4 4L15 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor">
    <path d="M4 8h8M8 4l4 4-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DubaiMarketOutlook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const takeaways = [
    {
      title: "Target Prime Locations:",
      description: "Limit acquisition to Downtown, Palm Jumeirah, and Marina for resilient occupancy.",
    },
    {
      title: "Budget for Volatility:",
      description: "Ensure cash reserves cover service charges during summer months.",
    },
    {
      title: "Verify Operator Licensing:",
      description: "Ensure your management company holds a valid DTCM license to avoid liability.",
    },
    {
      title: "Expect 6-8% Net:",
      description: "Disregard sales pitches promising double-digit guaranteed returns.",
    },
  ];
  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo Image */}
          <a href="/" className="logo">
            <img src={logoImg} alt="Wego Holiday Homes" className="logo-image" />
          </a>

          {/* Desktop Links */}
          <div className={`nav-links ${isOpen ? "mobile-open" : ""}`}>
            <a href="#">Market Data</a>
            <a href="#">Services</a>
            <a href="#" className="active">
              Insights
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Breadcrumb */}
        <div className="breadcrumb fade-in" style={{ animationDelay: "0s" }}>
          <div className="breadcrumb-inner">
            <a href="#">Insights</a>
            <svg
              className="chevron"
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
              <polyline points="9 6 15 12 9 18" />
            </svg>
            <span>Market Outlook</span>
          </div>
        </div>

        <article className="article-wrapper">
          {/* Hero Section */}
          <header className="hero-header fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Title */}
            <h1 className="hero-title">
              Dubai holiday home market outlook 2026
            </h1>

            {/* Intro Text */}
            <div className="hero-intro">
              <p>
                The Dubai short-term rental market has shifted from a speculative opportunity to a regulated asset class. As 2026 approaches, investors must navigate tighter regulations and evolving tenant demands to secure consistent returns.
              </p>
              <p>
                This outlook analyzes yield expectations, operational costs, and the regulatory framework for UK and international property owners. It separates market sentiment from verifiable data to support capital allocation decisions.
              </p>
              <p>
                The analysis focuses on prime freehold districts and assumes a professional management structure is in place.
              </p>
            </div>

            {/* Meta Data */}
            <div className="hero-meta">
              <div className="author-info">
                <div className="author-avatar">WH</div>
                <span className="author-name">Wego Research Team</span>
              </div>
              <span className="meta-item">Updated December 2025</span>
              <span className="meta-item">5 min read</span>
            </div>
          </header>

          {/* Content Blocks */}
          <section className="yields-block fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="yields-title">
              Short-term rental yields vs annual leases
            </h2>

            <div className="yields-content">
              <p>
                Investors often cite gross yield figures without accounting for the higher operational expenditure (OpEx) associated with holiday homes. While gross income for short-term rentals typically exceeds long-term leases by 20–25%, net figures present a narrower margin.
              </p>
              <p>
                In prime districts such as Downtown Dubai and Dubai Marina, realistic net yields for short-term rentals currently sit between <strong>6.5% and 8.5%</strong>. This accounts for vacancy periods during the summer (May to September) and service charges.
              </p>
              <p>
                Comparative annual lease yields in the same districts average 5.0% to 6.5%. The premium for short-term letting validates the strategy only if occupancy remains above 75% annually.
              </p>
            </div>
          </section>

          <section className="regulation-block fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="regulation-title">DTCM regulation compliance</h2>

            <div className="regulation-content">
              <p>
                The Department of Economy and Tourism (DET), formerly DTCM, enforces strict standards for holiday homes. Compliance is not optional and impacts operational feasibility.
              </p>
              <p>
                Owners must register every unit and display the QR code permit at the property entrance. Failure to comply results in fines ranging from AED 5,000 to AED 50,000.
              </p>
              <p>
                Additionally, the "Tourism Dirham" fee is charged per night, per room. This cost is typically passed to the guest but influences the total price competitiveness of the unit against hotels.
              </p>
            </div>
          </section>

          {/* Block 3: Costs */}
          <section className="costs-block fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="section-title">Operational costs and management fees</h2>

            <div className="section-content">
              <p>
                Transitioning to the holiday home market introduces costs absent in standard tenancies. Investors should budget for the following deductions from gross revenue:
              </p>

              <ul className="costs-list">
                <li>
                  <strong>Management Fees:</strong> 15% to 25% of revenue. Agencies handling bookings, guest vetting, and maintenance command the higher end of this range.
                </li>
                <li>
                  <strong>Utilities &amp; Internet:</strong> Paid by the landlord, unlike long-term leases.
                </li>
                <li>
                  <strong>Furnishing Amortization:</strong> High-traffic units require furniture refreshes every 3–5 years.
                </li>
              </ul>

              <p>
                Self-management is possible but legally complex for non-residents. Most overseas investors utilize licensed operators to mitigate this administrative burden.
              </p>
            </div>
          </section>

          {/* Block 4: Risks */}
          <section className="risks-block fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="section-title">Risk factors and downside protection</h2>

            <div className="section-content">
              <p>
                The primary risk in 2026 is supply saturation in secondary locations. While beachfront and Downtown assets retain pricing power, generic apartments in peripheral areas may struggle to maintain ADR (Average Daily Rate).
              </p>
              <p>
                Seasonality remains significant. Revenue generated in December can be triple that of July. Cash flow planning is essential to cover fixed costs during the low season.
              </p>
            </div>
          </section>

          {/* Investor Takeaways */}
          <section className="investor-takeaways fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="takeaways-header">
              <Briefcase className="icon" />
              <h3>Investor Takeaways</h3>
            </div>

            <ul className="takeaways-list">
              {takeaways.map((item, index) => (
                <li key={index} className="takeaway-item">
                  <Check className="check-icon" />
                  <span>
                    <strong>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 5: CONCLUSION */}
          <div className="conclusion fade-in" style={{ animationDelay: "0.7s" }}>
            <p>
              The data for 2026 suggests the Dubai holiday home market remains a viable
              strategy for yield enhancement, provided investors accept higher operational
              complexity. It acts as a diversification tool rather than a passive income
              guarantee. Success depends on asset quality and rigorous cost management.
            </p>
          </div>

          {/* CTA SECTION */}
          <section className="cta-section fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="cta-content">
              <div className="cta-text">
                <h3>Need a revenue forecast?</h3>
                <p>
                  Receive a bespoke yield analysis for your specific property based on current
                  2026 market data and competitor benchmarking.
                </p>
              </div>
              <a href="#" className="cta-button">
                Request Free Analysis
                <ArrowRight className="arrow-icon" />
              </a>
            </div>
            <div className="cta-decorative"></div>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">WEGO HOLIDAY HOMES</div>
          <div className="footer-copy">© 2026 Wego Holiday Homes.</div>
        </div>
      </footer>
    </div>
  );
};

export default DubaiMarketOutlook;

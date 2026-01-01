import React from "react";
import "../styles/DubaiMarketOutlook2026.css";
import logoImg from "../assets/new-logo.png";
const DubaiMarketOutlook2026 = () => {
  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="/" className="logo">
            <img src={logoImg} alt="Wego Holiday Homes" className="logo-image" />
          </a>

          <div className="desktop-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a className="active" href="#">Insights</a>
          </div>

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
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="breadcrumb-icon"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Analysis
          </a>
        </div>

        {/* Hero Section */}
        <article className="article">
          <header className="article-header">
            <div className="tags">
              <span>Market Outlook</span>
              <span className="dot"></span>
              <span>Investment Strategy</span>
            </div>

            <h1 className="article-title">
              Dubai Holiday Home Market Outlook: 2025 Investor Guide
            </h1>

            <div className="author-info">
              <div className="avatar">
                <img
                  src="https://ui-avatars.com/api/?name=Wego&background=B08D55&color=fff"
                  alt="Wego Research Desk"
                />
              </div>
              <div>
                <p className="author-name">Wego Research Desk</p>
                <p className="publish-date">28th November 2025 · 4 Min Read</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1592822939448-674743ebab38?w=1600&q=80"
              alt="Dubai Marina Skyline"
            />
            <div className="image-overlay"></div>
          </div>

          {/* Main Content Blocks */}
          <div className="content prose">
            <p>
              The short-term rental market in Dubai continues to mature. For property investors and overseas landlords, the outlook for 2025 shifts focus from rapid speculative growth to operational efficiency and sustainable yields.
            </p>
            <p>
              This guide examines the current market fundamentals, regulatory requirements, and the financial reality of operating a holiday home in Dubai this year. It aims to provide clarity for those making capital allocation decisions between long-term leases and short-stay models.
            </p>

            <h2>Market Fundamentals and Demand</h2>
            <p>
              Demand for short-term accommodation in Dubai is no longer driven solely by leisure tourism. The tenant profile has diversified significantly.
            </p>
            <p>
              Corporate travellers and project-based consultants now account for a substantial portion of bookings, particularly in business hubs like DIFC and Business Bay. This shift reduces seasonal volatility, as corporate demand often peaks when leisure travel softens.
            </p>
            <p>
              Investors should note that "prime location" definitions are tightening. Properties within walking distance of transport infrastructure or direct beach access command disproportionately higher occupancy rates compared to secondary locations.
            </p>

            <h2>Regulation and Licensing Compliance</h2>
            <p>
              The Department of Economy and Tourism (DET) maintains strict oversight of the sector. For landlords, this regulation is a net positive, as it raises barriers to entry and removes substandard inventory from the market.
            </p>
            <p>
              Compliance is binary. Properties must be fully licensed before a single night is booked. Operators are responsible for submitting guest passport data to the DTCM system in real-time.
            </p>
            <p>
              Investors residing overseas should ensure their management agency has a robust compliance framework. Penalties for non-compliance are severe and fall ultimately on the property owner.
            </p>

            <h2>Yield Expectations vs. Costs</h2>
            <p>
              Gross revenue figures often cited in marketing materials can be misleading. A professional investment analysis must focus on Net Operating Income (NOI).
            </p>
            <p>
              Operating costs in Dubai have stabilized but remain a key factor. These include DET tourism fees, utility consumption (DEWA), and high-speed internet. Maintenance costs for luxury assets also require a contingency fund of 3-5% of gross revenue.
            </p>
            <p>
              Despite higher operational costs compared to long-term lets, the premium on short-term rates typically results in a higher net yield for well-managed assets in prime zones. This premium is the "active management" return.
            </p>

            {/* Investor Takeaways */}
            <div className="takeaways">
              <h3>Investor Key Takeaways</h3>
              <ul>
                <li>
                  <span className="bullet"></span>
                  <span><strong>Focus on prime assets:</strong> Secondary locations suffer disproportionately during off-peak summer months.</span>
                </li>
                <li>
                  <span className="bullet"></span>
                  <span><strong>Plan for seasonality:</strong> Cash flow varies. Ensure liquidity to cover costs during the low season (June–August).</span>
                </li>
                <li>
                  <span className="bullet"></span>
                  <span><strong>Vet your operator:</strong> Confirm your management company handles all DTCM submissions and tax collection.</span>
                </li>
                <li>
                  <span className="bullet"></span>
                  <span><strong>Maintain quality:</strong> Wear and tear is higher. Budget for regular furniture refreshes to maintain rate integrity.</span>
                </li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              The 2025 market environment favors professional landlords over casual hosts. With correct asset selection and strict cost control, holiday homes continue to offer a viable alternative to traditional leasing. The decision should be based on data and a realistic assessment of risk tolerance regarding variable income.
            </p>

            {/* CTA */}
            <div className="cta-block">
              <h3>Portfolio Assessment</h3>
              <p>
                If you hold property in Dubai and are evaluating the switch to short-term letting, request a detailed revenue projection. We provide a conservative estimate of potential yields based on current comparable performance.
              </p>
              <a href="#" className="cta-btn">Request ROI Assessment</a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              WEGO<span className="logo-highlight">HOLIDAY HOMES</span>
            </span>
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
      <a href="https://wa.me/" className="wa-widget" aria-label="Chat on WhatsApp">
        <div className="wa-tooltip">Speak to an Expert</div>
        <button className="wa-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default DubaiMarketOutlook2026;

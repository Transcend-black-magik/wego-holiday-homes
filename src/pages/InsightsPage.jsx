import React from "react";
import "../styles/InsightsPage.css";

export default function InsightsPage() {
  return (
    <div className="page-root">
      {/* NAV */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            WEGO<span>HOLIDAY HOMES</span>
          </a>

          <div className="nav-links">
            <a href="/ukanddubai">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#" className="active">Insights</a>
          </div>

          <div className="nav-cta">
            <a href="#" className="btn-primary">Book Stay</a>
            <button className="menu-btn">☰</button>
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
          {[
            {
              title: "Holiday Home Management in Dubai",
              desc: "Dubai is one of the world’s most regulated and opportunity-rich short-term rental markets.",
              points: [
                "Licensing and compliance requirements",
                "Income potential and expectations",
                "Why professional management matters"
              ]
            },
            {
              title: "Short-Term Rentals vs Long-Term Lets",
              desc: "Choosing the right rental strategy is critical for profitability and risk management.",
              points: [
                "Income comparison",
                "Cost structures and returns",
                "Flexibility considerations"
              ]
            },
            {
              title: "Investor Strategies for Short-Term Rentals",
              desc: "Many investors earn without managing operations themselves.",
              points: [
                "Hands-off investment structures",
                "Co-hosting models",
                "Risk and return balance"
              ]
            },
            {
              title: "Dubai Holiday Homes Market Outlook",
              desc: "Understanding market direction is essential for long-term performance.",
              points: [
                "Demand trends and regulation",
                "2025 income expectations",
                "UK vs Dubai positioning"
              ]
            }
          ].map((item, i) => (
            <article key={i} className="insight-card">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <span className="explore">Explore:</span>
              <ul>
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              <a href="#" className="read-link">
                Read Article →
              </a>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="cta-box">
          <h3>
            Short-term rentals can offer strong returns<br />
            when approached strategically.
          </h3>

          <p>
            If you are considering holiday home management or short-term rentals
            in the UK or Dubai, a tailored assessment is the smartest first step.
          </p>

          <div className="cta-actions">
            <a href="#" className="btn-light">Request an ROI Assessment</a>
            <a href="#" className="btn-outline">Speak to Our Team</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="logo">
              WEGO<span>HOLIDAY HOMES</span>
            </span>
            <p>Luxury Short-Term Rentals</p>
          </div>

          <div className="footer-links">
            <a href="#">UK Homes</a>
            <a href="#">Dubai</a>
            <a href="#">Insights</a>
            <a href="#">Contact</a>
          </div>

          <div className="copyright">
            © 2025 Wego Holiday Homes.
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <span className="tooltip">Speak to an Expert</span>
        <div className="whatsapp-btn">💬</div>
      </a>
    </div>
  );
}

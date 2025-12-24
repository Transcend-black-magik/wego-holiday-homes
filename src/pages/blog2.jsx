import "../styles/blog2.css";

export default function ShortTermVsLongTerm() {
  return (
    <div className="page-root">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            WEGO<span>HOLIDAY HOMES</span>
          </a>

          <div className="nav-links">
            <a href="#">Insights</a>
          </div>

          <div className="nav-cta">
            <a href="#" className="btn-book">Book Stay</a>
            <button className="menu-btn">☰</button>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="main fade-up">
        <div className="back">
          <a href="/insights">← Back to Insights</a>
        </div>

        <article className="article">
          <header className="article-header">
            <div className="tags">
              <span>Strategy</span>
              <span className="dot" />
              <span>Profitability</span>
            </div>

            <h1>
              Short-Term Rentals vs Long-Term Lets: Which Is More Profitable?
            </h1>

            <div className="author-row">
              <div className="author">
                <img
                  src="https://ui-avatars.com/api/?name=Wego&background=B08D55&color=fff"
                  alt=""
                />
                <div>
                  <p className="author-name">Wego Editorial Team</p>
                  <p className="author-meta">Dec 22, 2025 · 5 Min Read</p>
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
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7136662e-6903-4446-8334-dbe8186ce2f2_1600w.jpg"
              alt="Interior"
            />
          </div>

          <div className="content">
            <p className="intro">
              Property owners often ask whether short-term rentals or long-term
              lets are more profitable. The answer depends on location, strategy,
              and management.
            </p>

            <h2>Income Potential</h2>
            <p>
              Long-term lets provide predictable monthly income but are capped
              by market rent.
            </p>

            <div className="box">
              <ul>
                <li>Increase earnings during peak demand</li>
                <li>Adjust pricing dynamically</li>
                <li>Capitalise on tourism and business travel</li>
              </ul>
            </div>

            <h2>Costs and Management</h2>
            <ul className="disc">
              <li>Cleaning and linen turnover</li>
              <li>Utilities and internet</li>
              <li>Management and guest services</li>
            </ul>

            <h2>Risk and Control</h2>
            <div className="grid">
              <div className="card">
                <h3>Long-Term Risks</h3>
                <ul>
                  <li>Tenant arrears</li>
                  <li>Eviction delays</li>
                  <li>Limited control</li>
                </ul>
              </div>
              <div className="card accent">
                <h3>Short-Term Benefits</h3>
                <ul>
                  <li>Greater control</li>
                  <li>Market flexibility</li>
                  <li>Lower long-term exposure</li>
                </ul>
              </div>
            </div>

            <h2>Final Thought</h2>
            <p>
              The right choice depends on data, not opinion. A tailored income
              comparison is the smartest way to decide.
            </p>

            <div className="cta">
              <h3>Unsure which strategy suits your property?</h3>
              <p>
                Request a personalised ROI assessment and see the numbers
                clearly.
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

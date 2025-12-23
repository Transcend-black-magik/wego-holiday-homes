import React from "react";
import "../styles/ukanddubai.css";

const UkAndDubaiHomes = () => {
  return (
    <div className="wego-root antialiased text-neutral-800 bg-white">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md border-b transition-all duration-300 bg-white/90 border-neutral-100">
        <div className="flex h-20 max-w-7xl mx-auto px-6 md:px-12 items-center justify-between">
          <a href="#" className="flex items-center gap-1.5">
            <span className="text-lg font-semibold tracking-tight text-black">
              WEGO<span className="gold-text">HOLIDAY HOMES</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="nav-link">Home</a>
            <a href="#uk-homes" className="nav-link">UK Collection</a>
            <a href="#dubai-homes" className="nav-link">Dubai (Coming Soon)</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#uk-homes" className="hidden md:flex primary-btn">
              Book Stay
            </a>
            <button className="lg:hidden">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury Interior"
            className="hero-bg"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content fade-up">
          <span className="hero-badge">
            Professional Short-Term Stays
          </span>

          <h1 className="hero-title">
            Luxury Holiday Homes in <br className="hidden md:block" /> the UK & Dubai
          </h1>

          <p className="hero-subtitle">
            Professionally managed short-term stays in prime UK locations,
            with exclusive Dubai homes launching soon.
          </p>

          <div className="hero-actions">
            <a href="#uk-homes" className="hero-btn light">
              View Available UK Homes
            </a>
            <a href="#dubai-homes" className="hero-btn dark">
              Launching Soon
            </a>
          </div>
        </div>
      </header>

      {/* UK HOMES */}
      <section id="uk-homes" className="section-wrapper">
        <div className="section-header">
          <div>
            <span className="status-dot" />
            <span className="status-text">Bookable Now</span>
            <h2>Available UK Collection</h2>
            <p>
              Experience the British countryside and city living with our
              premium, ready-to-book properties.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Plan Your Stay with Confidence</h2>
        <div className="cta-actions">
          <a href="#uk-homes" className="primary-btn">
            Book a UK Holiday Home
          </a>
          <a href="https://wa.me/" className="secondary-btn">
            Launch List
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <span className="text-lg font-semibold">
            WEGO<span className="gold-text">HOLIDAY HOMES</span>
          </span>
          <p>Luxury Short-Term Rental</p>
        </div>
      </footer>
    </div>
  );
};

export default UkAndDubaiHomes;
